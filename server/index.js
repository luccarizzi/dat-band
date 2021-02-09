require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const searchInput = require('./search-input');

const pg = require('pg');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
app.use(staticMiddleware);

app.get('/api', (req, res, next) => {
  const { category, search } = req.query;
  if (!search || !category) {
    throw new ClientError(400, 'category and search are required fields');
  }
  const params = [searchInput(search)];
  let sql;
  switch (category) {
    case 'band':
      sql = `
        select *
        from "bands"
        join "cities" using ("cityId")
        where "bandName" like $1
      `;
      break;
    case 'album':
      sql = `
        select "albumId", "albumTitle", "releaseYear", "recordLabel", "albumImageUrl"
        from "albums"
        where "albumTitle" like $1
      `;
      break;
    case 'musician':
      sql = `
        select *
        from "musicians"
        join "cities" using ("cityId")
        where "musicianFirstName" like $1
        or    "musicianLastName"  like $1
      `;
      break;
  }

  db
    .query(sql, params)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/band/:bandId', (req, res, next) => {
  const bandId = parseInt(req.params.bandId, 10);
  if (!bandId || bandId < 0) {
    throw new ClientError(400, 'bandId must be a positive integer');
  }
  const data = {};
  const params = [bandId];
  const sqlImageCarousel = `
    select "bandCarouselImageUrl", "bandCarouselImageId"
    from "bands"
    join "carouselImages" using ("bandId")
    where "bandId" = $1
  `;
  const sqlTitle = `
    select "bandName"
    from "bands"
    where "bandId" = $1
  `;
  const sqlInfo = `
    select "bandGenre", "debutYear", "city", "state", "country"
    from "bands"
    join "cities" using ("cityId")
    join "cityState" using ("cityId")
    join "states" using ("stateId")
    join "stateCountry" using ("stateId")
    join "countries" using ("countryId")
    where "bandId" = $1
  `;
  const sqlMembers = `
    select "musicianFirstName", "musicianLastName", "musicianId", "current"
    from "members"
    join "musicians" using ("musicianId")
    where "bandId" = $1
  `;
  const sqlDiscography = `
    select "albumId", "albumTitle", "albumImageUrl", "releaseYear"
    from "discography"
    join "albums" using ("albumId")
    where "bandId" = $1
  `;
  const sqlVideography = `
    select "videoId", "videoUrl"
    from "videos"
    where "bandId" = $1
  `;

  db
    .query(sqlImageCarousel, params)
    .then(result => {
      data.imageCarousel = result.rows;
      return db.query(sqlTitle, params);
    })
    .then(result => {
      data.title = result.rows;
      return db.query(sqlInfo, params);
    })
    .then(result => {
      data.info = result.rows;
      return db.query(sqlMembers, params);
    })
    .then(result => {
      data.members = result.rows;
      return db.query(sqlDiscography, params);
    })
    .then(result => {
      data.discography = result.rows;
      return db.query(sqlVideography, params);
    })
    .then(result => {
      data.videography = result.rows;
      res.json(data);
    })
    .catch(err => next(err));
});

app.get('/api/album/:albumId', (req, res, next) => {
  const albumId = parseInt(req.params.albumId, 10);
  if (!albumId || albumId < 0) {
    throw new ClientError(400, 'albumId must be a positive integer');
  }
  const data = {};
  const params = [albumId];
  const sqlImage = `
    select "albumImageUrl"
    from "albums"
    where "albumId" = $1
  `;
  const sqlTitle = `
    select "albumTitle"
    from "albums"
    where "albumId" = $1
  `;
  const sqlInfo = `
    select "bandId", "bandName", "releaseYear", "genre", "recordLabel"
    from "albums"
    join "discography" using ("albumId")
    join "bands" using ("bandId")
    join "albumGenre" using ("albumId")
    join "genres" using ("genreId")
    where "albumId" = $1
  `;
  const sqlPersonnel = `
    select "musicianId", "musicianFirstName", "musicianLastName"
    from "personnel"
    join "musicians" using ("musicianId")
    where "albumId" = $1
  `;
  const sqlTrackList = `
    select "trackId", "trackNo", "track", "length"
    from "tracks"
    where "albumId" = $1
  `;

  db
    .query(sqlImage, params)
    .then(result => {
      data.image = result.rows;
      return db.query(sqlTitle, params);
    })
    .then(result => {
      data.title = result.rows;
      return db.query(sqlInfo, params);
    })
    .then(result => {
      data.info = result.rows;
      return db.query(sqlPersonnel, params);
    })
    .then(result => {
      data.personnel = result.rows;
      return db.query(sqlTrackList, params);
    })
    .then(result => {
      data.trackList = result.rows;
      res.json(data);
    })
    .catch(err => next(err));
});

app.get('/api/musician/:musicianId', (req, res, next) => {
  const musicianId = parseInt(req.params.musicianId, 10);
  if (!musicianId || musicianId < 0) {
    throw new ClientError(400, 'musicianId must be a positive integer');
  }
  const data = {};
  const params = [musicianId];
  const sqlImage = `
    select "musicianImageUrl"
    from "musicians"
    where "musicianId" = $1
  `;
  const sqlTitle = `
    select "musicianFirstName", "musicianLastName"
    from "musicians"
    where "musicianId" = $1
  `;
  const sqlInfo = `
    select "dob", "city", "state", "country"
    from "musicians"
    join "cities" using ("cityId")
    join "cityState" using ("cityId")
    join "states" using ("stateId")
    join "stateCountry" using ("stateId")
    join "countries" using ("countryId")
    where "musicianId" = $1
  `;
  const sqlAssociated = `
    select "bandId", "bandName"
    from "members"
    join "bands" using ("bandId")
    where "musicianId" = $1
  `;
  const sqlRecorded = `
    select "albumId", "albumImageUrl", "albumTitle", "releaseYear"
    from "personnel"
    join "albums" using ("albumId")
    where "musicianId" = $1
  `;

  db
    .query(sqlImage, params)
    .then(result => {
      data.image = result.rows;
      return db.query(sqlTitle, params);
    })
    .then(result => {
      data.title = result.rows;
      return db.query(sqlInfo, params);
    })
    .then(result => {
      data.info = result.rows;
      return db.query(sqlAssociated, params);
    })
    .then(result => {
      data.associated = result.rows;
      return db.query(sqlRecorded, params);
    })
    .then(result => {
      data.recorded = result.rows;
      res.json(data);
    })
    .catch(err => next(err));
});

app.get('/api/genre', (req, res, next) => {
  const { bandGenre } = req.query;
  if (!bandGenre) {
    throw new ClientError(400, 'bandGenre is a required field');
  }
  const params = [bandGenre];
  const sqlGenre = `
    select "bandId", "bandName"
    from "bands"
    where "bandGenre" = $1
  `;
  db
    .query(sqlGenre, params)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

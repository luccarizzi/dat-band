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

  const sqlBand = `
    select "city", "state", "country", "bandName", "bandGenre", "debutYear"
    from "bands"
    join "cities" using ("cityId")
    join "cityState" using ("cityId")
    join "states" using ("stateId")
    join "stateCountry" using ("stateId")
    join "countries" using ("countryId")
    where "bandId" = $1
  `;

  const sqlImages = `
    select "bandCarouselImageUrl", "bandCarouselImageId"
    from "bands"
    join "carouselImages" using ("bandId")
    where "bandId" = $1
  `;

  const sqlMembers = `
    select "current", "musicianFirstName", "musicianLastName", "musicianId"
    from "bands"
    join "members" using ("bandId")
    join "musicians" using ("musicianId")
    where "bandId" = $1
  `;

  const sqlVideos = `
    select "videoId", "videoUrl"
    from "videos"
    where "bandId" = $1
  `;

  const sqlAlbums = `
    select "albumTitle", "releaseYear", "albumId", "albumImageUrl"
    from "bands"
    join "discography" using ("bandId")
    join "albums" using ("albumId")
    where "bandId" = $1
  `;

  db
    .query(sqlBand, params)
    .then(result => {
      data.band = result.rows;
      return db.query(sqlImages, params);
    })
    .then(result => {
      data.images = result.rows;
      return db.query(sqlMembers, params);
    })
    .then(result => {
      data.members = result.rows;
      return db.query(sqlVideos, params);
    })
    .then(result => {
      data.videos = result.rows;
      return db.query(sqlAlbums, params);
    })
    .then(result => {
      data.albums = result.rows;
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

  const sqlBand = `
    select "bandName"
    from "discography"
    join "bands" using ("bandId")
    where "albumId" = $1
  `;

  const sqlAlbum = `
    select *
    from "albums"
    where "albumId" = $1
  `;

  const sqlTrackList = `
    select "trackId", "trackNo", "track", "length"
    from "tracks"
    where "albumId" = $1
  `;

  const sqlAlbumGenre = `
    select "genre"
    from "albumGenre"
    join "genres" using ("genreId")
    where "albumId" = $1
  `;

  const sqlPersonnel = `
    select "musicianId", "musicianFirstName", "musicianLastName"
    from "personnel"
    join "musicians" using ("musicianId")
    where "albumId" = $1
  `;

  db
    .query(sqlBand, params)
    .then(result => {
      data.band = result.rows;
      return db.query(sqlAlbum, params);
    })
    .then(result => {
      data.album = result.rows;
      return db.query(sqlTrackList, params);
    })
    .then(result => {
      data.tracksList = result.rows;
      return db.query(sqlAlbumGenre, params);
    })
    .then(result => {
      data.albumGenre = result.rows;
      return db.query(sqlPersonnel, params);
    })
    .then(result => {
      data.personnel = result.rows;
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

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

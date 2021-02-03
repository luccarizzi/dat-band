require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

const app = express();

const jsonMiddleware = express.json()
app.use(jsonMiddleware)

app.use(staticMiddleware);

app.post('/api', (req, res, next) => {
  let { category, search } = req.body;
  if (!category || !search) {
    throw new ClientError(400, 'category and search are required fields');
  }

  const fixedSearch = `${search[0].toUpperCase()}${search.slice(1)}%` // create function to solve all possible search input

  let sql;
  switch (category) {
    case 'band':
      sql = `
        select "bandName", "debutYear"
        from "bands"
        where "bandName" like $1
      `;
      break;
    case 'album':
      sql = `
        select "albumTitle", "releaseYear", "recordLabel", "albumImageUrl"
        from "albums"
        where "albumTitle" like $1
      `;
      break;
    case 'musician':
      sql = `
        select "musicianFirstName", "musicianLastName", "dob", "musicianImageUrl"
        from "musicians"
        where "musicianFirstName" like $1
        or    "musicianLastName"  like $1
      `;
      break;
  }

  const params = [fixedSearch];

  db
    .query(sql, params)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
})

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

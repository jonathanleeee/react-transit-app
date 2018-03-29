const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database-mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


app.get('/api/lines', (req, res) => {
  // TODO - your code here!
  db.getAllLines((results) => {
  	res.status(200).send(results);
  });
  // - In `server/index.js`, fill in the request handler that will respond to `GET` requests to `/api/lines` by sending JSON of the service lines stored in the database. 

  // - You should use the `getAllLines` function you wrote earlier in this step in your implementation.
});

// Write additional route handlers as needed below!

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

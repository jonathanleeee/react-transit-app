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

});

app.get('/api/lines/:lineId', (req, res) => {
  // TODO - your code here!
  db.getAllStops((results) => {
  	res.status(200).send(results);
  },req.params.lineId);

});



// - In `server/index.js`, add an Express route handler that will respond to `GET` requests to `/api/lines/:lineId` by sending  JSON of the stops along one service line. 
//   - Use the database helper function you wrote earlier in this step in your implementation.
//   - Use Express' [Route Parameters](http://expressjs.com/en/guide/routing.html#route-parameters) to get the `lineId` out of the request URL inside your request handler function.





// Write additional route handlers as needed below!

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllLines = function(cb) {
  // TODO - your code here!
  // I added from line 9 to 13
  var q = 'SELECT * FROM service_lines';
  connection.query(q, function (error, results, fields) {
  	if (error) {
  		console.log("Error message:" + error);
  	} else {
  		console.log("Success");
  		return cb(results);
  	}
	});	
}


const getAllStops = function(cb, id) {
  var q = 'SELECT stations.name FROM stations INNER JOIN stops ON stops.station_id = stations.id WHERE stops.line_id = ?';
  connection.query(q, [id] , function(error, results, fields) {
    if (error) {
      console.log("Error message:" + error);
    } else {
      console.log("Success");
      return cb(results);
    }
  }); 
}


module.exports = {
  getAllLines,
  getAllStops
};


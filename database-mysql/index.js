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

// - Fill in the `getAllLines` function in `db/index.js` to retrieve all of the lines from the `service_lines` table in the database.

//   - *NOTE for the curious - the table in the database is called `service_lines` because "lines" is a reserved word in MySQL.* 



module.exports = {
  getAllLines
};

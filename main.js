const mysql = require('mysql');

var MESSAGESDB = {
	NAME:`'customer_215444_messages'`,
	EXIST:false
};

var sql;
var connection = mysql.createConnection({
	host: "na03-sql.pebblehost.com",
	port: 3306,
	user: "customer_215444_messages",
	password: "7QNoHsvRk5X0e@jHvwqy"
});

connection.connect(async function(err) {if(err) throw err});


var ISMessagesDB =  function(ID) {

		sql = `CREATE DATABASE IF NOT EXISTS ${MESSAGESDB.NAME}
			\nCREATE TABLE IF NOT EXISTS ${ID}`;
		connection.query(sql, async function(err, result) {
			if (err) throw err;
			console.log("Result: " + JSON.stringify(result));
			return JSON.stringify(result);
		});
	
	
};



var run = (async () =>{
	console.log("Connected!");
	sql = "SHOW DATABASES";

	connection.query(sql, function (err, result) {
		if (err) throw err;
		var mysqlResult = JSON.stringify(result);
		console.log(`DataBases: `);
		console.log(Object.values(result));
	});

	if(ISMessagesDB()) console.log("Exists" + ISMessagesDB());
});
run();
module.exports = ({
	run, ISMessagesDB
});



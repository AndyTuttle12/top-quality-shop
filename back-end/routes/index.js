var express = require('express');
var router = express.Router();
var config = require('../config/config.js');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: config.host,
	user: config.username,
	password: config.password,
	database: config.database
});

connection.connect();



/* GET top 3 auctions page. */
router.get('/getHomeAuctions', function(req, res, next) {
  var auctionsQuery = "SELECT * FROM auctions " + 
  "INNER JOIN images ON images.auction_id = auctions.id " +
  "LIMIT 10";
  connection.query(auctionsQuery, (error, results, fields) => {
		if (error) throw error;
		res.json(results);
	})
	// res.render('index', { title: 'Express' });
});

router.post('/register', (req, res, next)=>{
	console.log(req.body);
	checkDupeUserQuery = "SELECT * FROM users WHERE username = ?";
	connection.query(checkDupeUserQuery,[req.body.username],(error,results,fields)=>{
		console.log(results);
		if(results.length===0){
			var insertUserQuery = "INSERT INTO users (email, real_name, username, password) VALUES " +
				"(?, ?, ?, ?)";
			connection.query(insertUserQuery, [req.body.email, req.body.name, req.body.username, req.body.password],(error, results, fields)=>{
				res.json({msg:"userInserted"});
			});
		}else{
			res.json({
				msg: 'userNameTaken'
			});
		}
	})
});

module.exports = router;
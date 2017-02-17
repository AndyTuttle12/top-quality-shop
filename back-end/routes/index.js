var express = require('express');
var router = express.Router();
var config = require('../config/config.js');
var randToken = require('rand-token');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: config.host,
	user: config.username,
	password: config.password,
	database: config.database
});

connection.connect();

var bcrypt = require('bcrypt-nodejs');

// var hashedPassword = bcrypt.hashSync("x");
// var checkHash = bcrypt.compareSync("x", hashedPassword);


/* GET top 3 auctions page. */
router.get('/getHomeAuctions', (req, res, next)=>{
  var auctionsQuery = "SELECT * FROM auctions " + 
  "INNER JOIN images ON images.auction_id = auctions.id " +
  "LIMIT 10";
  connection.query(auctionsQuery, (error, results, fields)=>{
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
			connection.query(insertUserQuery, [req.body.email, req.body.name, req.body.username, bcrypt.hashSync(req.body.password)],(error, results, fields)=>{
				res.json({msg:"userInserted"});
			});
		}else{
			res.json({
				msg: 'userNameTaken'
			});
		}
	})
});

router.post('/login', (req, res, next)=>{
	var username = req.body.username;
	var password = req.body.password;
	var findUserQuery = "SELECT * FROM users WHERE username = ?";
	connection.query(findUserQuery, [req.body.username], (error, results, fields)=>{
		if(error)throw error;
		if(results.length === 0){
			res.json({
				msg: "badUsername"
			});
		}else{
			checkHash = bcrypt.compareSync(password, results[0].password);
			console.log(checkHash);
			if(checkHash === false){
				res.json({
					msg: "badPassword"
				})
			}else{
				var user = req.body.username;
				var token = randToken.uid(40);
				insertToken = "UPDATE users SET token=?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR) "+
                    "WHERE username=?";
                connection.query(insertToken,[token, username], (error, results)=>{
					console.log(token);
					res.json({
						msg: "Login Successful",
						token: token,
						username: user
					})
				});
			}
		}
	})
})

module.exports = router;
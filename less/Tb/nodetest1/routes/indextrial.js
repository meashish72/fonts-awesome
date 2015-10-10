var app   = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'siddhi',
		database : 'final',
	});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
	
app.get('/',function (req,res){
	res.render ('indextrial');
});

app.get('/indextrialsignup',function (req,res){
	res.render ('indextrialsignup');
});


app.post('/signin',function(req,res){
	var UserName = req.body.username;
	var PassWord = req.body.password;
	var data = {
		"error":1,
		"user":""
	};
	if(!!UserName && !!PassWord){
		connection.query("INSERT INTO user_pass VALUES(?,?,'worker')",[UserName,PassWord],function(err, rows, fields){
			if(!!err){
				data["user"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["user"] = "User Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["user"] = "Please provide all required data!";
		res.json(data);
	}
	res.render('done');
});

app.post('/signup',function(req,res){
	var UserName = req.body.username;
	var PassWord = req.body.password;
	var data = {
		"error":1,
		"user":""
	};
	if(!!UserName && !!PassWord){
		connection.query("INSERT INTO user_pass VALUES(?,?,'worker')",[UserName,PassWord],function(err, rows, fields){
			if(!!err){
				data["user"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["user"] = "User Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["user"] = "Please provide all required data!";
		res.json(data);
	}
	res.render('indextrial');
});

app.post('/signup',function(req,res){
	var UserName = req.body.username;
	var PassWord = req.body.password;
	var data = {
		"error":1,
		"user":""
	};
	if(!!UserName && !!PassWord){
		connection.query("INSERT INTO user_pass VALUES(?,?,'worker')",[UserName,PassWord],function(err, rows, fields){
			if(!!err){
				data["user"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["user"] = "User Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["user"] = "Please provide all required data!";
		res.json(data);
	}
	res.render('indextrial');
});


module.exports = app;

var express = require('express');
var app = express();

//Create a static file server
app.configure(function(){
	app.use(express.static(__dirname ));
	app.use(express.json());
	app.use(express.urlencoded());
});

var database = require('./database');

app.get("/word", function(req, res){

res.send(getWord());

});

app.post("/postWord", function(req, res){

var word = req.body['word'];
console.log("WORD:" + word);
putWord(word);

res.send(200);
});

function getWord(){
	return database.getWord();
}

console.log(database.getWord());

function putWord(body){
	database.putWord(body);
}


var port = 8080;
app.listen(port);
console.log('Express server started on port %s', port);

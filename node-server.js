const HTTP = require('http');
//const TWITTER = require('twitter');

const PORT1 = 7000;
const PORT2 = 7500;

let goodSaying = ["Your Are Smart.", "You smell good.","You Are A Beautiful Butterfly.", "Peaches are good.  You are like a peach." ]

function somethingGood(request, response) 
{
 	response.end(goodSaying[Math.floor(Math.random()* goodSaying.length)]);
}

function somethingBad(request, response) 
{
 	response.end("You Stink!");
}

var server1 = HTTP.createServer(somethingGood);


server1.listen(PORT1, function() 
{
 	console.log("Server listening on: http://localhost:%s", PORT1);
});

var server2 = HTTP.createServer(somethingBad);

server2.listen(PORT2, function() 
{
 	console.log("Server listening on: http://localhost:%s", PORT2);
});

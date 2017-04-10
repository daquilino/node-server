const HTTP = require('http');

const PORT1 = 7000;
const PORT2 = 7500;



function somethingGood(request, response) 
{
 	response.end("You Are A Beautiful Butterfly");
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

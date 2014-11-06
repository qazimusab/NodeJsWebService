var sys = require('sys'),
	http = require('http');

var operations = {
	add: function(a,b){ return a+b },
	sub: function(a,b){ return a-b },
	mul: function(a,b){ return a*b },
	sub: function(a,b){ return a-b }
}

http.createServer(function(request,response){
	var parts = request.url.split("/"),
	op = operations[parts[1]],
	a = parseInt(parts[2] , 10),
	b = parseInt(parts[3],  10);

	var result = op ? op(a,b) : "Error";


	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end(""+result);
}).listen(3000,"127.0.0.1");
sys.puts("Server running at 127.0.0.1:3000/");

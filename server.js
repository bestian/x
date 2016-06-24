const PORT=8080; 
var x = require('./x');

const fs = require('fs');
var http = require('http');


//Create a server
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       

    var server = http.createServer(function(request, response){	
		console.log(request.url);

		function res_404() {
			response.writeHead(404, {"Content-Type": "text/html"});
			response.write("<html><head><title>404</title></head><body><h1>404: page not found</h1></body></html>");
	    	response.end();
		}

		function res_403(){
			response.writeHead(403, {"Content-Type": "text/html"});
			response.write("<html><head><title>404</title></head><body><h1>403: Forbidden</h1></body></html>");
	    	response.end();
		}

		switch (request.method) {
			case "GET": 
				var pnf = 1;
				if (request.url.match(/^\/(index|index.html)?$/)) {
					pnf = false;
				    response.writeHeader(200, {"Content-Type": "text/html"});  
			        response.write(html); 
			        response.end();      
				};
				if (request.url.match(/^\/x\//)){
					pnf = false;
					response.writeHead(200, {"Content-Type": "text/x"});
					response.write(x.toLatex(request.url));
			    	response.end();
			    };
			    if (request.url.match(/(css|js|img)$/)) {
					pnf = false;
			    	fs.readFile("."+request.url, function (err, data) {
					    if (err) {
					        throw err;
					        res_404(); 
					    } else {
							response.writeHead(200, {"Content-Type": "text/"+request.url.match(/(css|js|img)$/)});
							response.write(data);
					    	response.end();
					    }	
					}); 
				} 

			    if (pnf) res_404(); 
			break;
			case "POST":  // 創建目錄與檔案 & 權限管理
				res_403();
		    break;
		    default:
		    	response.end("NULL");
	    }

	});

	//Lets start our server
	server.listen(PORT, function(){
	    //Callback triggered when server is successfully listening. Hurray!
	    console.log("Server listening on: http://localhost:%s", PORT);
	});
});


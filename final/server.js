const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require("express");
//var content = fs.readFileSync('./conf/servers.conf');
const app = express();
const options = {
	  ca: fs.readFileSync('../certs/ca_bundle.crt'),
	  key: fs.readFileSync('../certs/private.key'),
	  cert: fs.readFileSync('../certs/certificate.crt')
};


const server = https.createServer(options, (req, res) => {
	    console.log('Request for ' + req.url + ' by method ' + req.method);

	    if (req.method == 'GET') {
		            var fileUrl;
		            //if (req.url == '/sampleapp') fileUrl = './cad/standaloneWebApp/index.html';
		            if (req.url == '/') fileUrl = 'index.html';
		    	    else fileUrl = req.url;
		    		console.log('File url : ' + fileUrl);
		    
		            var filePath = path.resolve('./' + fileUrl);
		    		console.log('File Path at the begining : ' + filePath);
		            const fileExt = path.extname('File Path : ' + filePath);
		            if (/*fileExt == '.html' || fileExt == '.js'|| fileExt == '.jpg'*/true ) {//@123 aagman very bad heck...
				                fs.exists(filePath, (exists) => {
							                if (!exists) {
										                    filePath = path.resolve('./public/404.html');
										                    res.statusCode = 404;
										                    res.setHeader('Content-Type', 'text/html');
										                    fs.createReadStream(filePath).pipe(res);
										                    return;
										                }
							                res.statusCode = 200;
							                res.setHeader('Content-Type', 'text/html');
							                fs.createReadStream(filePath).pipe(res);
							            });
				            }
		            else if (fileExt == '.css') {
				                res.statusCode = 200;
				                res.setHeader('Content-Type', 'text/css');
				                fs.createReadStream(filePath).pipe(res);
				            }
		            else {
				                filePath = path.resolve('./public/404.html');
				                res.statusCode = 404;
				                res.setHeader('Content-Type', 'text/html');
				                fs.createReadStream(filePath).pipe(res);
				            }
		        }
	    else {
		            filePath = path.resolve('./public/404.html');
		            res.statusCode = 404;
		            res.setHeader('Content-Type', 'text/html');
		            fs.createReadStream(filePath).pipe(res);
		        }
});

/*var server = https.createServer(options, app);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("/home/ec2-user/website/final/index");
});
*/
server.listen(443, '0.0.0.0', () => {
	    console.log("Server running " );
});


var http = require('http');
var fs = require('fs');
http.createServer((req, res)=>{
    fs.readFile('text.html',(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end()
    })
}).listen(4000)
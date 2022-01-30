//const res = require('express/lib/response');
var http = require('http');
var data={name:"Satish",age:"30",city:"Bangalore"}
var data2=[

    {name:"Satish",age:"30",city:"Bangalore"},
    {name:"Vanshika",age:"20",city:"Kanpur"},
    {name:"Dev",age:"3",city:"Jalalpur"}


]
http.createServer(function(req, res) {
    res.writeHead(200,{'Content-type':'application\json'})
    res.write(JSON.stringify(data2))
    res.end()
}).listen(3900);
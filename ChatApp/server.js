var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);
var mongoose = require('mongoose');


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sksatishk9:Sumankusum@1@cluster0.2oups.mongodb.net/Chat_App?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
// var dbUrl = "mongodb+srv://sksatishk9:Sumankusum@1@cluster0.2oups.mongodb.net/test"
var messages=[
    {name:'Satish',message:'hi'},
    {name:'Vanshika',message:'hello'}
]
app.get('/messages',(req, res)=>{
    res.send(messages);
})
app.post('/messages',(req, res)=>{
    messages.push(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);
})
io.on('connection', (socket)=>{
    console.log("A user is connected")
})
mongoose.connect(uri,{useMongoClient: true}, (err)=>{
    console.log("mongo DB Connection!", err)
})
var server = http.listen(3000, () => {
    console.log('Server is listing on port!', server.address().port) 
});
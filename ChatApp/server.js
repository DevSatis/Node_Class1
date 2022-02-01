var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);
var mongoose = require('mongoose');
const { sendStatus } = require('express/lib/response');

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

var dbUrl = "mongodb+srv://sksatishk9:Sumankusum@cluster0.2oups.mongodb.net/ChatAppData?retryWrites=true&w=majority";

var Message = mongoose.model('Message',{
    name: String,
    message:String
})


app.get('/messages',(req, res)=>{
    Message.find({},(err, messages)=>{
        res.send(messages);
    })
    
})

app.post('/messages',async (req, res)=>{

    try {
        
        var message = new Message(req.body);

        var savedMessage = await message.save()
        
        console.log("Saved")
        var censored = await Message.findOne({message:'badword'})
         if(censored){
            await Message.remove({_id: censored.id})
        }else 
            io.emit('message', req.body);

        res.sendStatus(200);

    } catch (error) {
        res.sendStatus(500)
        return console.error(error); 
    }
    
})


io.on('connection', (socket)=>{
    console.log("A user is connected")
})

mongoose.connect(dbUrl, (err)=>{
    console.log("Mongo DB Connection", err);
})

var server = http.listen(3000, () => {
    console.log('Server is listing on port!', server.address().port) 
});
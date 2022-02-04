var events = require('events');
const { EventEmitter } = require('stream');
var eventEmitter = new events.EventEmitter();

eventEmitter.on("speak",(name)=>{
    console.log(name,"is speaking");
})

eventEmitter.emit("speak","Satish")
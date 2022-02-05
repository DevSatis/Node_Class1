const express = require('express');
const app = express();
const router = express.Router();
const checkUrl= require('./rMiddleWare');

// app.use(checkUrl)
app.get('/',(req, res)=>{
    // res.send("This is Home Page! mware")
    res.sendFile(__dirname+"/Home.html")
});
router.get('/about',checkUrl,(req, res)=>{
    // res.send("This is About Page! mware")
    res.sendFile(__dirname+"/About.html");
});
router.get('/login',checkUrl,(req, res)=>{
    // res.send("This is Login Page! mware");
    res.sendFile(__dirname+"/Login.html")
});
app.use('/',router);
app.listen(4500);
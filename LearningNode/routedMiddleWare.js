const express = require('express');
const app = express();
const router = express.Router();
const checkUrl= require('./rMiddleWare');

// app.use(checkUrl)
app.get('/',(req, res)=>{
    res.send("This is Home Page! mware")
});
router.get('/about',checkUrl,(req, res)=>{
    res.send("This is About Page! mware")
});
router.get('/login',checkUrl,(req, res)=>{
    res.send("This is Login Page! mware")
});
app.use('/',router);
app.listen(4500);
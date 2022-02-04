const express = require('express');
const app = express();
const checkUrl = function(req, res, next)
{
    console.log("current rout is: ", req.originalUrl)
next();
}
app.use(checkUrl)
app.get('/',(req, res)=>{
    res.send("This is Home Page! mware")
});
app.get('/about',(req, res)=>{
    res.send("This is About Page! mware")
});
app.get('/login',(req, res)=>{
    res.send("This is Login Page! mware")
});
app.listen(4500);
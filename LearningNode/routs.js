const express = require('express')
const app = express();
app.get('/',(req, res)=>{
    res.send("This is Home Page!")
});
app.get('/about',(req, res)=>{
    res.send("This is About Page!")
});
app.get('/login',(req, res)=>{
    res.send("This is Login Page!")
});

app.listen(4500);
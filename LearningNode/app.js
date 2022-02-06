const express = require("express");
const app = express();

app.use('/assets',express.static('assets'))
app.set("view engine",'ejs');
app.get("/profile/:name",(req, res)=>{

    data={
        email:'sksatishk9@gmail.com',
        name:'Satish Kumar',
        city:'Bangalore',
        skills:['Javascript','React JS','Node Js', 'Solidity']
    }
    res.render('Profile',{name:req.params.name, data:data});
    console.warn(req.params.name)
});

app.get("/login",(req, res)=>{
    console.log(req.query);
    res.render('Login');
});

app.get("/",(req, res)=>{
    res.render('Home');
});

app.listen(4500);
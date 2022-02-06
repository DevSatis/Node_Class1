const express = require("express");
const app = express();

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
app.listen(4500);
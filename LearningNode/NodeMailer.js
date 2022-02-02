var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:"sksatishk9@gmail.com",
        pass: 'Sonali@1'
    }
});
var mailOptions = {
    from:'sksatishk9@gmail.com',
    to:'sksatishk9@gmail.com',
    subject:'Test node Mail',
    text:'Hello this is test mail from satish'
}
transport.sendMail(mailOptions,(err, info)=>{
    if(err){
        console.log("This is a error");
    }else{
        console.log("Email has been sent successfully", info.response);
    }
})
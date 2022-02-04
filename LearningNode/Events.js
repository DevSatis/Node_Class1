var fs = require('fs');
var rs = fs.createReadStream('./demo.txt');
rs.on('open',()=>{
    console.log('Demo File is open')
})
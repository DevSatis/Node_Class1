const fs = require('fs')

function mobileNumber(err, data){
            console.log("data:",data);

}
fs.readdir('c:/', mobileNumber);

console.log("This comes after the execution!")
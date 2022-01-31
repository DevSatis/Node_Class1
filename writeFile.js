var fs = require('fs');

var data={
    name:'Vanshika'    
}

fs.writeFile('data3.json', JSON.stringify(data), (err)=> {
    console.log("Finsished writing", err);
});
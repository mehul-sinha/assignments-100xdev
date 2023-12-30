const fs = require("fs");

function writeFile(text){
    fs.writeFile("a.txt", text, 'utf-8', (err)=>{
        if(err){
            console.log("error writing to the file");
        }
        else{
            console.log("file written successfully");
        }
    })
}

const content = "new content for a.txt";
writeFile(content);
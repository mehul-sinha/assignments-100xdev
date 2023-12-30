const fs = require("fs");

function trimExtraSpace(data){
    // Split the string into words and filter out empty strings
    const words = data.split(' ').filter(Boolean);

    // Join the words back together with a single space
    const trimedData = words.join(' ');

    return trimedData;
}

function cleanFile(){
    fs.readFile("file.txt", "utf-8", (err, data) =>{
        const newData = trimExtraSpace(data);
        fs.writeFile("file.txt", newData, "utf-8", (err)=>{
            if(err){
                console.log("error writing to the file");
            }
            else{
                console.log("file written successfully");
            }
        })
    })
} 

cleanFile();
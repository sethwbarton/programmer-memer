const fs = require("fs");
const path = require('path')

const directoryPath = path.join(__dirname, '../public/memes');
const memes = [];
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        memes.push({resource: `/memes/${file}`})
    });
    const jsonContent = JSON.stringify({memes})
    fs.writeFile("./public/memes.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occurred while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });
});



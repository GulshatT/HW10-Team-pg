//const { error } = require("console");
const fs = require("fs");

function writePage (html) {
    fs.whriteFile("./dist/index.html", html, err => {
        if(err) {
            throw err
        }
        console.log("index.html Page generated")
        copyCSS()
    })
}
const copyCSS = () => {
    fs.copyFile("./src/style.css", "./dist/style.css", err => {
        if (err) {
            throw err
        }
        console.log("style.css filr copied")
    });
}
module.exports = writePage, copyCSS
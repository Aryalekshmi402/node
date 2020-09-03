var fs=require("fs");
var data=fs.readFileSync('inout.txt');
console.log(data.toString());
const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('captcha.html');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end(fileContent);
});

exports.get_text = function()
{   
    let text = "";
    for(i=0;i<2;i++)
    {
        text += String.fromCharCode(Math.floor(Math.random()*(90-65)+65));
        text += String.fromCharCode(Math.floor(Math.random()*(122-97)+97));
        text += String.fromCharCode(Math.floor(Math.random()*(57-48)+48));
    }
    return text;
}

server.listen(80,'127.0.0.1',()=>{
    console.log("server running at port 80");
    console.log("index text is : ");
    console.log(exports.get_text());
});
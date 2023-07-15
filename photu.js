const { CaptchaGenerator } = require("captcha-canvas");
const { writeFileSync } = require('fs');

const{get_text} = require('./index.js');
let text = get_text();
console.log("photu text is: ")
console.log(text);

const captcha = new CaptchaGenerator()
.setDimension(150, 450) 
.setCaptcha({text: text, size: 60, color: "deeppink"})
.setDecoy({opacity: 0.5})
.setTrace({color: "deeppink"});
const buffer = captcha.generateSync(); 

captcha.text 

console.log("working");
writeFileSync('captchaGenerator.png', buffer);

//checking

document.addEventListener('DOMContentLoaded', function(){
    const abc = document.getElementById('inp'); 
    const inp = abc.textContent;
    if(inp==text)
    {
        console.log("yes");
    }
    else{
        console.log("invalid");
    }
});

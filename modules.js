// var fs=require('fs')//to call fn's inside fs module and to import module

// fs.readFile("./text.txt","utf8",function(err,data){
//     if(err)
//         console.log("error in reading file")
//     else
//         console.log(data.toUpperCase())

// })
// var os=require('os')
// console.log(os.hostname())
// console.log(os.release())
// console.log(os.version())
 
//npm=node package manager
//npmjs.com

//npm install cowsay --save
// var cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));



//USER DEFINED MODULES
// var cal=require('./calci.js')
// console.log(cal.add(2,3))
// console.log(cal.sub(2,3))
// console.log(cal.mul(2,3))
// cal.div(2,0,(err,result)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(result)
// })

//JAVA SCRIPT OBJECT NOTATION(JSON)----imppp*****

// var book={title:"core java",author:"gary cornell",publisher:"tata mcgrahill",price:"500",pages:"1000"}
// console.log(book)
// var jsonbook= JSON.stringify(book)
// console.log(jsonbook)
// var bookobj=JSON.parse(jsonbook)
// for(ele in bookobj)
//     console.log(ele+":"+bookobj[ele])



//cascaded function call
const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));



//HTTP-HYPER TEXT TRANSFER PROTOCOL
//hypertext-text which is used to move from one document to another document
//sprotocol-rules and regulation to be followed for communicationn btw client and server
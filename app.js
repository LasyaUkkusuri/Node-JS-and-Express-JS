console.log("Example node js application")
var a=10
var b=7
c=a+b
console.log(c)
console.log("addition"+c)

// single line comment \n
// /*multiline comments */

function verifylogin(user,pwd,callback){
    if(pwd=="pwd1")
        callback(null,"correct login")
    else
        callback("incorrect",null)
 }
verifylogin("user1","pwd1",function(err,result)  { //or (err,result) =>  { 
        if(err)
            console.log(err);
        else
            console.log(result)

})//function()->callback functuion

console.log("program is starting");
setTimeout(()=>{
    console.log("inside timeout")
},2000);

console.log("after time out")
console.log("program ending")

//MODULES IN JS-GRP OF FN'S



//4th exercise
function validateUser(user,pwd,callback){
    

}
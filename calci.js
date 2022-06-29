exports.add=function(a,b){
    return a+b;
}
exports.sub=function(a,b){
    return a-b;
}
exports.mul=function(a,b){
    return a*b;//we should'nt run this application jst save it as it contains exports
}
exports.div=function(a,b,callback){
    if(b==0)
        callback("zero division",null)
    else
        callback(null,a/b)
}
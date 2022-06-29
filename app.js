// var nd=require('needle')
// var url="https://jsonplaceholder.typicode.com/todos/1"//same output will come in browser too
// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(body)
// })

// var nd=require('needle')
// var url="https://api.themoviedb.org/3/movie/top_rated?api_key=abd69698641f2c75e2ee67d12c755e3a&language=en-US&page=1"//same output will come in browser too
// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         var results=body.results
//         for(ele in results)
//             console.log(results[ele].title)
// })

// var nd=require('needle')
// var url="https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoibGFzeWF1a2t1c3VyaSIsImEiOiJjbDNvMG45NWQwaTY2M2RsMjRvejJxdnk0In0.yCxHrxZLpHmrcTXo8d9W4A"
// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(JSON.parse(body))//console.log(body)
// })

// var nd=require('needle')
// var url="http://api.weatherstack.com/current?access_key=a20b80794c3990071dded8d52aef798f&query=Bhimavaram"
// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(body.location.lat)
//         console.log(body.location.lon)
//         console.log(body.current.temperature)//console.log(body)
//         var desc=body.current.weather_descriptions
//         for(ele in desc)
//             console.log(desc[ele])
// })

// var nd=require('needle')
// for(var i=1;i<=500;i++){
// var url="https://api.themoviedb.org/3/movie/top_rated?api_key=abd69698641f2c75e2ee67d12c755e3a&language=en-US&page="+i
// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         var results=body.results
//         for(ele in results)
//             console.log(results[ele].title)
// })
// }

var nd=require('needle')
for(var i=1;i<=500;i++){
var url="https://api.themoviedb.org/3/movie/top_rated?api_key=abd69698641f2c75e2ee67d12c755e3a&language=en-US&page="+i
nd.get(url,(err,response,body)=>{
    if(err)
        console.log(err)
    else
        var results=body.results
        for(ele in results)
            if(results[ele].original_language=='ta')
                console.log(results[ele].title)
})
}

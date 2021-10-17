const express=require("express");
const app=express();
const apikey="fe8e061ea647049b8d160df0580f4e9d";
const https=require("https");
const bodyparser=require("body-parser");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const url="https://api.openweathermap.org/data/2.5/weather?q=london&appid="+apikey;
app.listen(3000,function(){
console.log("weather api server start");
});


app.get("/",function(request,response){
   console.log(__dirname);
   response.sendFile(__dirname + "/index.html");

});

app.post("/",function(req,response){
    const apikey="fe8e061ea647049b8d160df0580f4e9d";
    const cityname=req.body.cityname;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+apikey;
   
    https.get(url,function(res){
      
        res.on("data",function(data){
            var wheatherdata=JSON.parse(data);
           var weather=wheatherdata.weather[0].main;
         var cityweather=wheatherdata.name;
         var citytemp=wheatherdata.main.temp;

         response.write("this is "+cityweather+"  and weather is "+weather+"  and temprature is "+citytemp);
         response.send();
        });

    });

});

// https.get(url,function(res){
  
//     res.on("data",function(chunk){
//         var wheatherdata=JSON.parse(chunk);
//         console.log(wheatherdata);
//        data.push(chunk);
        
//     });
//     res.on('end', function() {
//         var binary = Buffer.concat(data);
//         var jsonObj = JSON.parse(binary);
//         console.log(typeof(jsonObj));
//         var name=jsonObj['name'];
//         console.log("inside end"+name);
//         // binary is your data
//     });


// });
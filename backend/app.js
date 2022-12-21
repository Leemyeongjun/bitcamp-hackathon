const express = require('express');

const request = require('request');

const port = 3000; // 웹서버 포트 번호

const app = express();

app.use(express.urlencoded({extended: true}));

// let start = 1001;
// let end = 2000;

app.get('/hackathon', (req, res) => {   

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://openapi.seoul.go.kr:8088/6a62515758326d7938397967674b4f/json/bikeList/1/1000/";
  // let openApiUrl = "http://openapi.seoul.go.kr:8088/6a62515758326d7938397967674b4f/json/bikeList/" + start + "/" + end +"/";

  request.get({
    uri: openApiUrl
  }, (error, reponse, body) =>{
    res.send(body);
  });
});


app.listen(
  3000,                          
  () => {                        
    console.log(`${port}번 포트에서 서버 시작했음!`);
  }
);
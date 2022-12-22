const express = require('express');

const request = require('request');

const port = 3000; // 웹서버 포트 번호

const app = express();

app.use(express.urlencoded({extended: true}));


app.get('/hackathon', (req, res) => {   

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://openapi.seoul.go.kr:8088/6a62515758326d7938397967674b4f/json/TbPharmacyOperateInfo/1/1000/";

  request.get({
    uri: openApiUrl
  }, (error, reponse, body) =>{
    res.send(body);
  });
});

app.get('/hackathon2', (req, res) => {   

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://openapi.seoul.go.kr:8088/6a62515758326d7938397967674b4f/json/TbPharmacyOperateInfo/1001/2000/";

  request.get({
    uri: openApiUrl
  }, (error, reponse, body) =>{
    res.send(body);
  });
});

app.get('/hackathon3', (req, res) => {   

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://openapi.seoul.go.kr:8088/6a62515758326d7938397967674b4f/json/TbPharmacyOperateInfo/2001/3000/";

  request.get({
    uri: openApiUrl
  }, (error, reponse, body) =>{
    res.send(body);
  });
});

app.get('/hackathon4', (req, res) => {   

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://openapi.seoul.go.kr:8088/6a62515758326d7938397967674b4f/json/TbPharmacyOperateInfo/3001/4000/";

  request.get({
    uri: openApiUrl
  }, (error, reponse, body) =>{
    res.send(body);
  });
});

app.get('/hackathon5', (req, res) => {   

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://openapi.seoul.go.kr:8088/6a62515758326d7938397967674b4f/json/TbPharmacyOperateInfo/4001/5000/";

  request.get({
    uri: openApiUrl
  }, (error, reponse, body) =>{
    res.send(body);
  });
});

app.get('/hackathon6', (req, res) => {   

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://openapi.seoul.go.kr:8088/6a62515758326d7938397967674b4f/json/TbPharmacyOperateInfo/5001/6000/";

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
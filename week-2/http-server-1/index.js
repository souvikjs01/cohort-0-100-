
const express = require("express");
const port = 3000   // ignore this for now
const app = express();

app.get('/', (req, res)=>{
    res.send('hello world coders')
}) 

// if chat gtp backend written:-
// app.post('/backend-api/conversation', (req, res)=>{
//     // run a machine larning model   
//      res.send('hello world')    
// })
app.listen(port)
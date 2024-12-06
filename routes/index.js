const express = require('express');
const path = require('path');


const indexRoute = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
indexRoute.get('/messages', (req, res) => {
    res.json(messages);
});
indexRoute.get('/',(req,res)=>{
    // res.setHeader('Refresh', '10')
    res.render('index',{title :"My chats",messages})
})
indexRoute.get('/new',(req,res)=>{
    res.render('form')

})

indexRoute.post('/new',(req,res)=>{
    if(!req.body.name){
        req.body.name="you";
    }
    if(req.body.text)messages.push({text:req.body.text,user:req.body.name,added:new Date()});
    console.log("hello\n");
    res.redirect('/');
    
})

module.exports=indexRoute;
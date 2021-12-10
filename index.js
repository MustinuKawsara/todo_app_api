const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config');

const app = express();
//route(s
app.get('/',(request, response)=>{
response.send('we are in the root folder');
});


app.get('/complete_todos',(requst,response)=>{
    response.send("we are in the completed todo folder");
});


//database connection
mongoose.connect(process.env.KE_URL,()=>console.log('successfully connected'));

//port to listen to requests



app.listen(2021);

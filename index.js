const express=require('express');
const mongoose=require('mongoose');
// check if the mongodb is connected using tasbar 
const url ='mongodb://localhost/AlienDBex';
const app=express();
// connect app to db

mongoose.connect(url,{useNewUrlParser:true});

const con=mongoose.connection
// check if it's connected

con.on('open',()=>{
    console.log("Connected...");
})

app.use(express.json())


const alienRouter=require('../CrudJs/routes/aliens')
app.use('/aliens',alienRouter)
 
app.listen(9001,()=>{
    console.log('Server started')
}) 
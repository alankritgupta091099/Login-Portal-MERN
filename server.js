var express=require('express');
var cors=require('cors');
var bodyParser=require('body-parser');
var app =express();
var mongoose=require('mongoose');
var port=process.env.PORT||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors());

const mongoURI='mongodb://localhost:27017/mernloginreg'

mongoose
    .connect(mongoURI,{useNewUrlParser:true},err=>{
        if(!err)
            console.log('MongoDB Connected');
        else
            console.log(err);
    })
var Users=require('./routes/Users');

app.use('/users',Users)

app.listen(port,()=>{
    console.log('server @'+port)
})
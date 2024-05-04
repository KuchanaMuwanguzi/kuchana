//adding the exxpress
const express= require('express');
const app= express();

const mongoose = require("mongoose");

const path = require('path');

app.use(express.static(path.join(__dirname, './public')))

//connecting to database
mongoose.connect("mongodb://localhost:27017/daystar", {})
.then(()=> console.log("connected to database"))
.catch(()=> console.log("error connecting to database"))

app.set('view engine', 'pug')

app.get('/index', (req, res)=>{
    res.render(path.join(__dirname, '/views/index'));
})

app.get('/adminReg', (req, res)=>{
    res.render(path.join(__dirname, '/views/adminReg'));
 })

app.get('/babycheckin', (req, res)=>{
    res.render(path.join(__dirname, '/views/babycheckin'));
})

app.get('/babycheckout', (req, res)=>{
    res.render(path.join(__dirname, '/views/babycheckout'));
})

app.get('/babyReg', (req, res)=>{
    res.render(path.join(__dirname, '/views/babyReg'));
})

app.get('/sitterReg', (req, res)=>{
    res.render(path.join(__dirname, '/views/sitterReg'));
})





//server listening to port
app.listen(3000, () => {
    console.log('server listening on port 3000')
});


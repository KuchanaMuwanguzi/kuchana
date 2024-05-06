//adding the exxpress
const express= require('express');
const app= express();

const mongoose = require("mongoose");

require('dotenv') .config();

const path = require('path');

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')))

//connecting to database
mongoose.connect(process.env.MONGODB_URL, {})
.then(()=> console.log("connected to database"))
.catch(()=> console.log("error connecting to database"))

app.set('view engine', 'pug')

app.use('/', require('./routes/mainroutes'))



//server listening to port
app.listen(3000, () => {
    console.log('server listening on port 3000')
});


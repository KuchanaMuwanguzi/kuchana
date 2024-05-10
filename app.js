//adding the exxpress
const express= require('express');
const app= express();

const Admin= require('./models/Admin')
const mongoose = require("mongoose");

require('dotenv') .config();

const path = require('path');

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')))

//initializing express session storage
app.use(session({
secret: process.env.SECRET,
resave: false,
saveUninitialized: true,
}));

//Passport Configurations
passport.use(Admin.createStrategy());

passport.serializeUser(Admin.serializeUser());
//breaking system when user logs out 
passport.deserializeUser(Admin.deserializeUser());
  
// express session configurations
app.use(passport.initialize());
app.use(passport.session());


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


//adding the exxpress
const express= require('express');
const app= express();

const mongoose = require("mongoose")

//connecting to database
mongoose.connect("mongodb://localhost:27017/daystar", {})
.then(()=> console.log("connected to database"))
.catch(()=> console.log("error connecting to database"))

//server listening to port
app.listen(3000, () => {
    console.log('server listening on port 3000')
});

const mongoose = require('mongoose') 
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema 

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,

    }

})

AdminSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'

})

module.exports = mongoose.model('Admin', AdminSchema)
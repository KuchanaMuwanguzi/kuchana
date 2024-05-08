const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const SitterSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    location: {
        type: String,
        required: true,
    },

    nin: {
        type: String,
        required: true,
    },

    contact: {
        type: String,
        required: true,
    },

    recommenderName: {
        type: String,
        required: true,
    },

    educationLevel: {
        type: String,
        required: true,
    },

    dateOfBirth: {
        type: String,
        required: true,
    },

    gender: {
        type: String,
        required: true,
    }, 

    sitterNumber: {
        type: String,
        required: true,
    },
})


module.exports = mongoose.model('Sitter', SitterSchema)
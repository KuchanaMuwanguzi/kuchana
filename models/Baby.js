const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const BabySchema = new Schema({
    fName: {
        type: String,
        required: true,
        unique: true,
    },

    dateOfBirth: {
        type: String,
        required: true,
    },

    gender: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    parentName: {
        type: String,
        required: true,
    },

    parentContact: {
        type: String,
        required: true,
    },

    babyNumber: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Baby', BabySchema)
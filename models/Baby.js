const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const BabySchema = new Schema({
    name: {
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

    motherName: {
        type: String,
        required: true,
    },

    motherContact: {
        type: String,
        required: true,
    },

    fatherName: {
        type: String,
        required: true,
    },

    fatherContact: {
        type: String,
        required: true,
    }, 

    babyNumber: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Baby', BabySchema)
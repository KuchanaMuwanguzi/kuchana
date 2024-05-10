const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const BabycheckinSchema = new Schema({
    babyName: {
        type: String,
        required: true,
        unique: true,
    },

    guardian: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    periodOfStay: {
        type: String,
    },

    amountPaid: {
        type: String,
    },

    checkin: {
        type: Boolean,
        default: false,
    },

    notes: {
        type: String,
    },
})

module.exports = mongoose.model('Babycheckin', BabycheckinSchema)
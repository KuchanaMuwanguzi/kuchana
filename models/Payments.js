const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const PaymentsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    paid: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Payments', PaymentsSchema)
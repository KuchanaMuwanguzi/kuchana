const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const PayementsSchema = new Schema({
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

module.exports = mongoose.model('Payements', PayementsSchema)
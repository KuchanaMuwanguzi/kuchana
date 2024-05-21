const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const ProcurementsSchema = new Schema({
    item: {
        type: String,
        required: true,
    },

    units: {
        type: Number,
        required: true,
    },

    pricePerUnit: {
        type: Boolean,
        default: false,
    },

    amount: {
        type: Number,
    }
})

module.exports = mongoose.model('Procurements', ProcurementsSchema)
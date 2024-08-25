const mongoose = require('mongoose');
const recordSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum:['Receipts','Payables']
    },
    category: {
        type: String,
        required: true,
        enum:['Air Ticket','Train Ticket','Bus Ticket','Hotel Booking','Tour Package','Currency','Transport','Passport','Visa','Salary','Bank Payment','Give Away','Others','Profit']

    },
    amount: {
        type: Number, 
        required: true
    },
    date: {
        type: Date, 
        required: true
    }
});

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        // unique: true 
    },
    name: {
        type: String,
        required: true
    },
    records: [recordSchema] 
});

const userModel = mongoose.model('User', userSchema);

module.exports ={userModel};
const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.ObjectId, ref: "Users"},

    courses_purchase: [{type: mongoose.Schema.ObjectId, ref: "Courses"}], 

    purchases_date: 
    {
        type: Date, 
        default: Date.now()
    }
}, {
    timestamps: true
});

const Transactions = mongoose.model("Transactions", TransactionSchema);

module.exports = Transactions;
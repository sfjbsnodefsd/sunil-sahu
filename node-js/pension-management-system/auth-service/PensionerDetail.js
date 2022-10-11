const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PensionerDetailSchema = new Schema({
    aadharNumber: String,
    name: String,
    dob: String,
    pan: String,
    salaryEarned: String,
    allowances: String,
    pensionCategory: String,
    bankDetails: {
        bankName: String,
        accountNumber: String,
        bankType: String
    },
    createdAt: {
        type: Date,
        default:Date.now()
    }
});

module.exports = User = mongoose.model("pensionerDetail", PensionerDetailSchema);
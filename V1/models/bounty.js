const mongoose = require("mongoose");

const bountySchema = mongoose.Schema({
    creator: { type: Number, required: true },
    target: { type: Number, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
});

module.exports = mongoose.model("Bounty", bountySchema);

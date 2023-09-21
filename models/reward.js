const mongoose = require("mongoose");

const rewardSchema = mongoose.Schema({
    hunter: { type: Number, required: true },
    target: { type: Number, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
});

module.exports = mongoose.model("Reward", rewardSchema);

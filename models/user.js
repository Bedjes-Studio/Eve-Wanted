const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    characterId: { type: Number, required: true },
    name: { type: String, required: true },
    birthday: { type: Date, required: true },
    corporationId: { type: Number },
    token: { type: String },
    refreshToken: { type: Number },
    hunters: { type: [Number], required: true },
    bounty: { type: Number, required: true },
    maxBounty: { type: Number, required: true },
    reward: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);

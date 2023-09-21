const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    character_id: { type: Number, required: true },
    name: { type: String, required: true },
    birthday: { type: Date, required: true },
    corporation_id: { type: Number },
    token: { type: String },
    refresh_token: { type: Number },
});

module.exports = mongoose.model('User', userSchema);
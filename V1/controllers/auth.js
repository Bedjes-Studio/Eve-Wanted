const jwt = require("jsonwebtoken");
const config = require("../config");

exports.storeCookie = (res, characterId) => {
    let cookie = jwt.sign({ characterId }, config.server.key, { expiresIn: config.server.cookieDuration });
    res.cookie("CHARACTER_ID", cookie);
};

exports.decodeCookie = (req) => {
    let cookie = req.cookies["CHARACTER_ID"];
    let decodedCookie = jwt.verify(cookie, config.server.key);
    return decodedCookie.characterId;
};

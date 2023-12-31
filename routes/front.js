const express = require("express");
const router = express.Router();

const ssoCtrl = require("../controllers/sso");

router.get("/", (req, res, next) => {
    res.render("page/index");
});

router.get("/login", (req, res, next) => {
    res.render("page/login");
});

router.get("/login/callback", ssoCtrl.ssoCallback);

module.exports = router;

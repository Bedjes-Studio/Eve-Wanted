const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "TODO : Home page",
    });
});

router.get("/login", (req, res, next) => {
    res.render("page/login");
});

module.exports = router;

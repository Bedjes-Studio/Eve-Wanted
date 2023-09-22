const express = require("express");
const router = express.Router();

router.get("/", (res, req, next) => {
    res.status(200).json({
        message: "TODO : Home page",
    });
});

module.exports = router;

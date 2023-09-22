exports.ssoCallback = (req, res, next) => {
    console.log("CALLBACK");
    console.log(req.query.code);
    console.log(req.query.state);
    res.status(200).json({ messsage: "callback" });
};

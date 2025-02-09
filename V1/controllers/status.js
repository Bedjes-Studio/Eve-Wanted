/**
 * Return a response if the server is online
 */
exports.status = (req, res, next) => {
    res.status(200).json({
        message: "Server is online!"
    });
}
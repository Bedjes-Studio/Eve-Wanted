const mongoose = require("mongoose");
const config = require("../config");
const { userfiller } = require("./user");
const { dropTables } = require("./utils");

mongoose
    .connect(config.mongodb.host + ":" + config.mongodb.port + "/" + config.mongodb.name, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB using port " + config.mongodb.port))
    .catch(() => console.log("Connection to MongoDB failed !"));

dropTables().then(() => {
    Promise.all([userfiller()]).then(() => {
        console.log("Data created.");
        process.exit(0);
    });
});

const User = require("../models/user");

exports.dropTables = () => {
    return Promise.all([User.deleteMany({})]).then((values) => {
        deletedEntries = values[0].deletedCount;
        console.log("- Deleted entries : " + deletedEntries);
    });
};

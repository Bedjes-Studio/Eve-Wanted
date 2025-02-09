const User = require("../models/user");
const Bounty = require("../models/bounty");

exports.dropTables = () => {
    return Promise.all([User.deleteMany({}), Bounty.deleteMany({})]).then((values) => {
        deletedEntries = values[0].deletedCount + values[1].deletedCount;
        console.log("- Deleted entries : " + deletedEntries);
    });
};

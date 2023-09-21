const User = require("../models/user");

const users = [
    { character_id: "1", name: "User1", birthday: Date.now() },
    { character_id: "2", name: "User2", birthday: Date.now() },
    { character_id: "3", name: "User3", birthday: Date.now() },
];

exports.userfiller = () => {
    return User.insertMany(users)
        .then(() => {
            console.log("- Users created");
        })
        .catch((error) => {
            console.log("unable to create users");
            process.exit(1);
        });
};

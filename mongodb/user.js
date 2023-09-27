const User = require("../models/user");

const users = [
    { characterId: "1", name: "User1", birthday: Date.now(), hunters: [], bounty: 10, maxBounty: 0, reward: 15 },
    { characterId: "2", name: "User2", birthday: Date.now(), hunters: [], bounty: 100, maxBounty: 0, reward: 5000 },
    { characterId: "3", name: "User3", birthday: Date.now(), hunters: [], bounty: 1000, maxBounty: 0, reward: 30 },
    { characterId: "4", name: "User4", birthday: Date.now(), hunters: [], bounty: 2000, maxBounty: 0, reward: 546 },
    { characterId: "5", name: "User5", birthday: Date.now(), hunters: [], bounty: 3000, maxBounty: 0, reward: 67133156115 },
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

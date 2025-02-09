const Bounty = require("../models/bounty");

const bouties = [
    { creator: "696237942", target: "92000736", amount: 10000, date: Date.now() },
    { creator: "696237942", target: "92000736", amount: 20000, date: Date.now() },
    { creator: "696237942", target: "92000736", amount: 30000, date: Date.now() },
    { creator: "696237942", target: "92000736", amount: 40000, date: Date.now() },
    { creator: "92000736", target: "696237942", amount: 50000, date: Date.now() },
];

exports.bountyfiller = () => {
    return Bounty.insertMany(bouties)
        .then(() => {
            console.log("- Bounties created");
        })
        .catch((error) => {
            console.log("unable to create bounties");
            process.exit(1);
        });
};

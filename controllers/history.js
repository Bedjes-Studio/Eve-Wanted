/**
 * Return 10 last events
 */

const createReward = (hunter, target, amount, killmailId) => {
    return new Promise(function (resolve, reject) {
        const reward = new Reward({
            hunter,
            target,
            amount,
            killmailId,
            date: Date.now(),
        });

        reward.save().then(resolve).catch(reject);
    });
};

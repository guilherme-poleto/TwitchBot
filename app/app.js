require('dotenv').config();
const Constants = require('./Utils/constants.js');
const TwitchBot = require('./bot.js');

const opts = {
    identity: {
        username: Constants.env.USERNAME,
        password: Constants.env.PASSWORD
    },
    channels: [
        'surskity11'
    ]
};

new TwitchBot(opts);

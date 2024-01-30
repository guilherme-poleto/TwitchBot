require('dotenv').config();
const Constants = require('./app/Utils/constants.js');
const TwitchBot = require('./app/bot.js');
const express = require('express');
const app = express();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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

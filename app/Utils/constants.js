/* eslint-disable no-undef */
const Constants = {
    commands: {
        options: ['!commands', '!dolar'],
    },
    messages: {
        mention: 'I am a BOT MrDestructoid. I am enjoying the stream.',
        commands: '!dolar'
    },
    env: {
        USERNAME: process.env.USR,
        PASSWORD: process.env.PSW
    },
    api: {
        dollarUrl: 'https://economia.awesomeapi.com.br/last/USD-BRL'
    }
};

module.exports = Constants;
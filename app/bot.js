const tmi = require('tmi.js');
const Constants = require('./Utils/constants.js');
const Utils = require('./Utils/utils.js');

class TwitchBot {
    constructor(opts) {
        const client = new tmi.client(opts);
        this.client = client;
        client.on('message', this.onMessageHandler.bind(this));
        client.on('connected', this.onConnectedHandler.bind(this));
        client.connect();
    }
    
    onConnectedHandler(addr, port) {
        console.log(`Connected to ${addr}:${port}`);
    }

    async onMessageHandler (target, context, msg, self) {
        if (self) { return; }

        this.target = target;
        this.context = context;

        const commandName = msg.trim();
        await this.validateMessage(commandName);
    }
    
    async validateMessage (command) {
        if (!(command.includes('@' + Constants.env.USERNAME) && this.context['display-name'] !== 'StreamElements')
            && !Constants.commands.options.includes(command)
            && !this.context['first-msg']) {
            return;
        }

        const message = await this.getMessage(command, this.context);
        this.client.say(this.target, message).then((result) => {
            console.log(new Date().toLocaleTimeString() + ' ' + result);
        }).catch((error) => {
            console.log(error);
        });
    }

    async getMessage(command, context) {
        if (command.includes('@' + Constants.env.USERNAME)) return Utils.buildDefaultResponse(Constants.messages.mention);
        if (context['first-msg']) return Utils.buildFirstUserMessageResponse(command, context);
        switch (command) {
            case '!commands':
                return Utils.buildDefaultResponse(Constants.messages.commands, context);
            case '!dolar': {
                const result = await this.getDollar();
                const value = await result.json();
                return Utils.buildDollarResponse(value.USDBRL.bid, context);
            }
        }
    }

    getDollar() {
        return fetch(Constants.api.dollarUrl);
    }
}

module.exports = TwitchBot;
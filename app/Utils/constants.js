/* eslint-disable no-undef */
const Constants = {
    commands: {
        options: ['!commands', '!elo', "!dolar", "!game", "!pix"],
    },

    messages: {
        pix: 'surskity@gmail.com',
        mention: 'I am a BOT MrDestructoid. I am enjoying the stream.',
        voteSkip: '!voteskip MrDestructoid',
        commands: 'Comandos: !dolar, !game',
        elo: '─────────────────────────────── Surskity. . . . . . . . . . . . Gold IV (10 LP) ───────────────────────────────',
    },

    env: {
        USERNAME: process.env.USR,
        PASSWORD: process.env.PSW,
        RIOT_API_KEY: process.env.RIOT_API_KEY,
        SURSKITY_SUMMONER_ID: process.env.SURSKITY_SUMMONER_ID
    },

    api: {
        dollarUrl: 'https://economia.awesomeapi.com.br/last/USD-BRL',
        riot: {
            getPuuidByName: `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Ayel/0001?api_key=${process.env.RIOT_API_KEY}`,
            getActiveGame: `https://br1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${process.env.SURSKITY_SUMMONER_ID}?api_key=${process.env.RIOT_API_KEY}`,
        },
        runes: 'https://ddragon.leagueoflegends.com/cdn/14.2.1/data/en_US/runesReforged.json',
        champions: 'https://ddragon.leagueoflegends.com/cdn/14.2.1/data/en_US/champion.json',
    },
        
    methods: {
        GET: 'GET',
        POST: 'POST',
        PATCH: 'PATCH',
    }
};

module.exports = Constants;
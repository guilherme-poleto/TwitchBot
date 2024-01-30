const Constants = require("./constants");
const RequestExecutor = require("./request-executor");

class Utils {

    static buildDefaultResponse(message, context) {
        return `@${context['display-name']} ${message}`;
    }

    static buildDollarResponse(value, context) {
        return `@${context['display-name']} Valor do dolar: ${value} reais brasileiros. MrDestructoid`;
    }

    static buildFirstUserMessageResponse(message, context) {
        return `ItsBoshyTime ItsBoshyTime ItsBoshyTime 
        (BOT) PRIMEIRA MENSAGEM DO USUÁRIO @${context['display-name']} NO CHAT: "${message}" 
        ItsBoshyTime ItsBoshyTime ItsBoshyTime`;
    }

    static async buildGameResponse(value, context) {
        if (value?.status?.status_code) {
            return `@${context['display-name']} O rosadinho não está em partida no momento! MrDestructoid`
        }
        const time = new Date(value.gameStartTime).toLocaleTimeString();
        const player = value.participants.find(obj => obj.summonerId === Constants.env.SURSKITY_SUMMONER_ID);
        const results = await this.getData(player.championId, player.perks.perkIds[0])
        const champion = await results[0].json();
        const perksData = await results[1].json();
        const playerData = {
            champion: Object.values(champion.data).find(obj => obj.key == player.championId),
            perks: perksData.find(obj => obj.id == player.perks.perkStyle).slots[0].runes.
                find(obj => obj.id == player.perks.perkIds[0]),
            secondaryPerk: perksData.find(obj => obj.id == player.perks.perkSubStyle)
        }
        return `@${context['display-name']} O rosadinho esta jogando!
        | Champion: ${playerData.champion.name}
        | ID da partida: ${value.gameId}
        | Horário de Inicio: ${time}
        | Runa: ${playerData.perks.name}
        | Runa Secundária: ${playerData.secondaryPerk.name}`
    }
    
    static async getDollar() {
        const data = await RequestExecutor.executeRequest({
            url: Constants.api.dollarUrl,
            method: Constants.methods.GET
        });
        return data;
    }

    static async getData() {
        return await Promise.all([this.getChampionData(),
        this.getRuneData()
        ])
    }

    static getChampionData() {
        return fetch(Constants.api.champions);
    }

    static getRuneData() {
        return fetch(Constants.api.runes);
    }
}

module.exports = Utils;

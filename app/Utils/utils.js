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
}

module.exports = Utils;

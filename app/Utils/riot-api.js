const Constants = require("./constants");
const RequestExecutor = require("./request-executor");

class RiotAPI {

    static async getActiveGame() {
        const data = await RequestExecutor.executeRequest({
                url: Constants.api.riot.getActiveGame,
                method: Constants.methods.GET
            }
        );
        return data;
    }
}

module.exports = RiotAPI;

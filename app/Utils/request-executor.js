class RequestExecutor {

    static async executeRequest(options) {
        const response = await fetch(options.url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options.payload)
        })
        const value = await response.json()
        return value;
    }
}

module.exports = RequestExecutor;

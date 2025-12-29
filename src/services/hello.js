exports.main = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Gany lambda!',
            currentDateTime: new Date().toISOString()
        })
    }
}
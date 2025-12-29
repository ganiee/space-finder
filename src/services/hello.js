exports.main = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            currentDateTime: new Date().toISOString(),
            message: `Hello Gany ! I will read from ${process.env.SPACES_TABLE_NAME} table`
        })
    }
}
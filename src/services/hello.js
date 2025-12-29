exports.main = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Ganesh Natarjan lambda!, Time now is',
            currentDateTime: new Date().toISOString(),
            message: `Hello! I will read from ${process.env.SPACES_TABLE_NAME} table`
        })
    }
}
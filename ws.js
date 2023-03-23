module.exports.chat = function (wsServer) {
    let clients = [];
    wsServer.on("request", (request) => {
        const connection = request.accept(null, request.origin);
        clients.push(connection);
        connection.on("message", (message) => {
            clients.forEach((client) => {
                client.sendUTF(message.utf8Data);
            })
        }
        )
    });
}
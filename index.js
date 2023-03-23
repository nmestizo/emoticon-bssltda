const express = require("express");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const ws = require('./ws');
// const mongo = require('./database');

const WebSocketServer = require("websocket").server;

app.set("port", 3000)
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));
// app.use('/', require('./routes'));

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

ws.chat(wsServer);

server.listen(app.get("port"), () => {
    console.log("Server on port: ", app.get("port"));
})
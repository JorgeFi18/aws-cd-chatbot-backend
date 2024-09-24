require('dotenv').config();
const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const config = require("./config");
const handleSocketConnection = require("./socket");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [config.origin]
  }
});

app.get('/', (req, res) => {
  res.send('Bienvenido a la charla "Crea un chatbot con AWS Bedrock y Claude"');
});


io.on('connection', (socket) => {
  handleSocketConnection(socket, io)
});

server.listen(config.port, () => {
  console.log("Server running!");
});

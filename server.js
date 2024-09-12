require('dotenv').config();
const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const config = require("./config");
const { invokeAgent } = require("./bedrockAgent");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [config.origin]
  }
});

app.get('/status', (req, res) => {
  res.send('ok');
});


io.on('connection', (socket) => {
  const sessionId = socket.handshake.query.sessionId;
  socket.join(sessionId);
  console.log("New session: ", sessionId);

  // New message from user
  socket.on("user-message", async (content) => {

    // Send back message to user
    io.to(sessionId).emit("new-message", {
      sessionId: sessionId,
      sender: "user",
      content: content
    });
    console.log(`User ${sessionId}:`, content);
    try {
      const response = await invokeAgent(content, sessionId);
      console.log(`Chatbot ${sessionId}:`, response);

      // Send IA response to user
      io.to(sessionId).emit("new-message", {
        sessionId: sessionId,
        sender: "chatbot",
        content: response
      });
    } catch (error) {
      // Notify IA failure to user
      io.to(sessionId).emit("new-message", {
        sessionId: sessionId,
        sender: "chatbot",
        content: "Hubo un error al procesar tu solicitud."
      });
    }
  });

  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

server.listen(config.port, () => {
  console.log("Server running!");
});

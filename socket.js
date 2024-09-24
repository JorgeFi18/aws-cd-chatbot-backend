const { invokeAgent } = require("./bedrockAgent");
const { MessageCreator } = require("./utils");

function handleSocketConnection(socket, io) {
  const sessionId = socket.handshake.query.sessionId;
  const createMessage = MessageCreator(sessionId);
  socket.join(sessionId);
  console.log("New session: ", sessionId);

  // New message from user
  socket.on("user-message", async (content) => {

    // Send back message to user
    io.to(sessionId).emit("new-message", createMessage("user", content));
    console.log(`User ${sessionId}:`, content);
    try {
      const response = await invokeAgent(content, sessionId);
      console.log(`Chatbot ${sessionId}:`, response);

      // Send IA response to user
      io.to(sessionId).emit("new-message", createMessage("chatbot", response));
    } catch (error) {
      // Notify IA failure to user
      io.to(sessionId).emit("new-message", createMessage("chatbot", "Hubo un error al procesar tu solicitud."));
    }
  });

  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
}

module.exports = handleSocketConnection;
const express = require('express');

// require('dotenv').config(); // Load environment variables
 require('dotenv').config(); // Load environment variables
const http = require('http');
const cors = require('cors')
const { Server } = require('socket.io');

const app = express();
const PORT = process.env.PORT || 4000;

//CORS helps to prevent malicious websites from accessing sensitive information on your server. Resource Sharing: It allows controlled access to resources on a server from a different origin, enabling web applications to make API requests to external services.12 Jun 2024

//Cross-origin resource sharing (CORS) is a mechanism to safely bypass the Same-origin policy, that is, it allows a web page to access restricted resources from a server on a domain different than the domain that served the web page.
app.use(cors({
    origin:'http://localhost:5173',
    method:['GET','POST'],
}));



const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Move server.listen outside the connection handler
server.listen(PORT, () => {
  console.log('Server is listening on port 4000');
});

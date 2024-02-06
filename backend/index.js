const express = require('express');
const app = express();
// const socket = require('socket.io');
const httpServer = require('http').createServer(app);;

const io = require('socket.io')(httpServer, {
    cors: {origin : '*'}
  });
// const io = socket(server);

const port = 3000;

io.on('connection', (socket) => {
    console.log('a user connected');
  
    socket.on('message', (message) => {
      console.log(message);
      io.emit('message', `${socket.id.substr(0, 2)}: ${message}`);
    });
  
    socket.on('disconnect', () => {
      console.log('a user disconnected!');
    });
  });

httpServer.listen(port, () => console.log(`listening on port ${port}`));



// server.js

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (message) => {
        console.log('message: ' + message);
        io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(3100, () => {
    console.log('listening on *:3100');
});

const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();
const sequelize = require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app); // wrap express in HTTP server

// ✅ Set up Socket.io
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // your frontend URL
    methods: ['GET', 'POST'],
  },
});

// 🧪 Temporary test event
io.on('connection', (socket) => {
  console.log(`🟢 New client connected: ${socket.id}`);

  socket.on('sendMessage', (data) => {
    console.log('📨 Message received:', data);
    socket.broadcast.emit('receiveMessage', data); // send to other clients
  });

  socket.on('disconnect', () => {
    console.log(`🔴 Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 5050;
server.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('📦 Connected to PostgreSQL!');
  } catch (err) {
    console.error('❌ Database error:', err);
  }
  console.log(`🚀 Server listening on port ${PORT}`);
});


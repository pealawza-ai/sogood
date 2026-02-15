const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// บอกให้ Server ส่งไฟล์หน้าเว็บ (HTML/CSS) ไปให้คนเล่น
app.use(express.static(__dirname));

let players = {};

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('joinGame', (name) => {
        // สร้างข้อมูลผู้เล่นใหม่
        players[socket.id] = { name, hand: [], score: 0 };
        io.emit('updatePlayers', players);
    });

    socket.on('drawCard', () => {
        if (players[socket.id]) {
            const card = Math.floor(Math.random() * 10) + 1;
            players[socket.id].hand.push(card);
            players[socket.id].score = players[socket.id].hand.reduce((a, b) => a + b, 0) % 10;
            io.emit('updatePlayers', players); // ส่งข้อมูลอัปเดตให้ทุกคนเห็นพร้อมกัน
        }
    });

    socket.on('disconnect', () => {
        delete players[socket.id];
        io.emit('updatePlayers', players);
    });
});

// เปิดประตูช่องทางที่ 3000
http.listen(3000, () => {
    console.log('✅ สมองกลาง (Server) เริ่มทำงานแล้วที่ http://localhost:3000');
});
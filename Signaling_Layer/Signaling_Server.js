const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// İstemcilerin bağlantı bilgilerini tutacak veri yapısı
const clients = {};

// İstemci bağlantılarını dinleme
io.on('connection', (socket) => {
  console.log('Yeni bir istemci bağlandı:', socket.id);

  // Yeni bir istemci bağlandığında
  socket.on('join', (roomId, userId) => {
    // İstemciyi ilgili odaya ekleyin
    socket.join(roomId);

    // İstemci bilgilerini kaydedin
    clients[socket.id] = {
      roomId,
      userId,
      socket,
    };

    console.log(`Kullanıcı ${userId}, odada ${roomId} bağlandı.`);
  });

  // Sinyal mesajı alındığında
  socket.on('signal', (roomId, userId, signal) => {
    // Mesajı hedef kullanıcıya iletin
    const targetClient = Object.values(clients).find(
      (client) => client.roomId === roomId && client.userId === userId
    );
    if (targetClient) {
      targetClient.socket.emit('signal', socket.id, signal);
    }
  });

  // İstemci bağlantısı koptuğunda
  socket.on('disconnect', () => {
    console.log('İstemci bağlantısı koptu:', socket.id);

    // İstemci bilgilerini silin
    delete clients[socket.id];
  });

  // SDP dosyası alındığında
  socket.on('sdp', (sdp) => {
    console.log('SDP dosyası alındı:', sdp);
    // SDP dosyasını işleme veya kullanma
    processSDP(sdp);
  });
});

// SDP dosyasını işleme veya kullanma
function processSDP(sdp) {
  // SDP dosyasını kullanarak bağlantıyı kurma veya işlemleri gerçekleştirme
  // ...
  // Örnek olarak, SDP dosyasını bir noktaya kaydetme
  saveSDPToFile(sdp);
}

// SDP dosyasını bir noktaya kaydetme işlevi
function saveSDPToFile(sdp) {
  console.log('sdp dosyas istemci tarafindan gonderilmedi');
  // Kaydetmek istediğiniz dosya yolu ve adını belirleyin
  const filePath = '/sdp/sdp.txt';

  // Dosyaya SDP dosyasını yazma
  const fs = require('fs');
  fs.writeFile(filePath, sdp, (err) => {
    if (err) {
      console.error('SDP dosyası kaydedilemedi:', err);
    } else {
      console.log('SDP dosyası başarıyla kaydedildi:', filePath);
    }
  });
}

// HTTP sunucusunu başlatma
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`WebRTC sinyalleme sunucusu ${PORT} portunda çalışıyor.`);
});

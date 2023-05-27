const io = require('socket.io-client');
const socket = io.connect('http://95.12.41.109:3000');
// Bağlantı odası ve kullanıcı kimliği
const roomId = 'myRoom';
const userId = 'myUser';

// Sinyal mesajını gönderme
function sendSignal(targetUserId, signal) {
  socket.emit('signal', roomId, targetUserId, signal);
}

// WebRTC bağlantısı kurulduğunda veya sinyal alındığında
socket.on('signal', (sourceUserId, signal) => {
  // Sinyali işleyin ve WebRTC bağlantısını kurun
  console.log(`Sinyal alındı: Kaynak Kullanıcı: ${sourceUserId}, Sinyal:`, signal);
  // WebRTC bağlantısı için gerekli işlemleri yapın
  // ...
});

// Sunucuya katılma mesajını gönderme
socket.emit('join', roomId, userId);

// SDP dosyasını sunucuya gönderme
function sendSDP(sdp) {
  socket.emit('sdp', sdp);
}

// Sunucudan gelen SDP dosyasını alma
socket.on('sdp', function (sdp) {
  // SDP dosyasını işleme
  processSDP(sdp);
});

// İşlenmiş SDP dosyasını kullanarak bağlantıyı kurma vb. işlemleri gerçekleştirme
function processSDP(sdp) {
  // SDP dosyasını kullanarak bağlantıyı kurma veya işlemleri gerçekleştirme
  // ...
}

// SDP dosyasını oluşturma ve sunucuya gönderme işlemlerini gerçekleştirme
async function createAndSendSDP() {
  // Medya akışlarını almak için kullanıcıdan izin iste
  try {
    const localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

    // RTCPeerConnection nesnesini oluşturma
    const peerConnection = new RTCPeerConnection();

    // Medya akışlarını ekleyin (örneğin, ses ve video)
    localStream.getTracks().forEach((track) => peerConnection.addTrack(track, localStream));

    // SDP dosyasını oluşturma
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    const sdp = peerConnection.localDescription.sdp;

    // Oluşturulan SDP dosyasını kullanma veya sunucuya gönderme
    // ...

    // SDP dosyasını sunucuya gönderme
    sendSDP(sdp);
  } catch (error) {
    console.error('Medya akışını almak için izin verilmedi:', error);
  }
}

// SDP dosyasını oluştur ve sunucuya gönder
createAndSendSDP();

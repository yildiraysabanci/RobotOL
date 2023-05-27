let APP_ID = "YOU-APP-ID" // Agora.io uygulama kimlik (App ID) bilgisini tanımlar

let token = null; // İstemci kimlik doğrulaması için kullanılan token, bu örnekte null olarak ayarlanmış (ek bir kimlik doğrulama yapılmıyor)
let uid = String(Math.floor(Math.random() * 10000)) // Kullanıcının benzersiz kimliği, rastgele oluşturulmuş bir sayı olarak atanıyor

let client; // AgoraRTM istemci nesnesi
let channel; // AgoraRTM kanal nesnesi

let queryString = window.location.search // Sayfa URL'sinden sorgu parametrelerini alır
let urlParams = new URLSearchParams(queryString) // Sorgu parametrelerini ayrıştırır
let roomId = urlParams.get('room') // 'room' parametresinden oda kimliğini alır

if(!roomId){
    window.location = 'lobby.html' // Eğer oda kimliği yoksa, kullanıcıyı lobideki başlangıç sayfasına yönlendirir
}

let localStream; // Kullanıcının yerel medya akışını temsil eden değişken
let remoteStream; // Uzak medya akışını temsil eden değişken
let peerConnection; // WebRTC için kullanılan peerConnection nesnesi

const servers = {
    iceServers:[
        {
            urls:['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
        }
    ]
} // ICE sunucuları tanımlanır

let constraints = {
    video:{
        width:{min:640, ideal:1920, max:1920},
        height:{min:480, ideal:1080, max:1080},
    },
    audio:true
} // Kamera ve ses kısıtlamaları tanımlanır

let init = async () => {
    client = await AgoraRTM.createInstance(APP_ID) // AgoraRTM istemci örneği oluşturulur
    await client.login({uid, token}) // İstemci kimliği ve token kullanılarak oturum açılır

    channel = client.createChannel(roomId) // Belirtilen oda kimliği ile birlikte bir kanal oluşturulur
    await channel.join() // Kanala katılım gerçekleştirilir

    channel.on('MemberJoined', handleUserJoined) // Başka bir kullanıcı kanala katıldığında tetiklenecek olay dinleyicisi tanımlanır
    channel.on('MemberLeft', handleUserLeft) // Başka bir kullanıcı kanaldan ayrıldığında tetiklenecek olay dinleyicisi tanımlanır

    client.on('MessageFromPeer', handleMessageFromPeer) // Başka bir kullanıcıdan gelen iletilere yanıt vermek için tetiklenecek olay dinleyicisi tanımlanır

    localStream = await navigator.mediaDevices.getUserMedia(constraints) // Kullanıcının yerel medya akışı alınır
    document.getElementById('user-1').srcObject = localStream // Kullanıcının yerel medya akışı, bir HTML video öğesine atanır
}

let handleUserLeft = (MemberId) => {
    document.getElementById('user-2').style.display = 'none' // Diğer kullanıcının video öğesi gizlenir
    document.getElementById('user-1').classList.remove('smallFrame') // Kullanıcının video öğesinin boyutu küçültülür
}

let handleMessageFromPeer = async (message, MemberId) => {
    message = JSON.parse(message.text) // Gelen ileti JSON formatından ayrıştırılır

    if(message.type === 'offer'){
        createAnswer(MemberId, message.offer) // Gelen ileti bir teklifse, yanıt oluşturulur ve karşı tarafa gönderilir
    }

    if(message.type === 'answer'){
        addAnswer(message.answer) // Gelen ileti bir yanıtsa, yanıt eklenir
    }

    if(message.type === 'candidate'){
        if(peerConnection){
            peerConnection.addIceCandidate(message.candidate) // Gelen ileti bir aday ise, aday ICE'a eklenir
        }
    }
}

let handleUserJoined = async (MemberId) => {
    console.log('A new user joined the channel:', MemberId)
    createOffer(MemberId) // Yeni bir kullanıcı kanala katıldığında, bir teklif oluşturulur ve karşı tarafa gönderilir
}

let createPeerConnection = async (MemberId) => {
    peerConnection = new RTCPeerConnection(servers) // WebRTC için peerConnection nesnesi oluşturulur

    remoteStream = new MediaStream() // Uzak medya akışı için MediaStream nesnesi oluşturulur
    document.getElementById('user-2').srcObject = remoteStream // Uzak medya akışı, bir HTML video öğesine atanır
    document.getElementById('user-2').style.display = 'block' // Uzak medya öğesi görünür hale getirilir

    document.getElementById('user-1').classList.add('smallFrame') // Kullanıcının video öğesi küçültülür

    if(!localStream){
        localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false}) // Kullanıcının yerel medya akışı alınır
        document.getElementById('user-1').srcObject = localStream // Kullanıcının yerel medya akışı, bir HTML video öğesine atanır
    }

    localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream) // Kullanıcının yerel medya akışı, peerConnection'a eklenir
    })

    peerConnection.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track) // Uzak medya akışı, HTML video öğesine eklenir
        })
    }

    peerConnection.onicecandidate = async (event) => {
        if(event.candidate){
            client.sendMessageToPeer({text:JSON.stringify({'type':'candidate', 'candidate':event.candidate})}, MemberId) // ICE adayı karşı tarafa gönderilir
        }
    }
}

let createOffer = async (MemberId) => {
    await createPeerConnection(MemberId) // Peer bağlantısı oluşturulur

    let offer = await peerConnection.createOffer() // Teklif oluşturulur
    await peerConnection.setLocalDescription(offer) // Yerel teklif, peerConnection'a atanır

    client.sendMessageToPeer({text:JSON.stringify({'type':'offer', 'offer':offer})}, MemberId) // Teklif karşı tarafa gönderilir
}

let createAnswer = async (MemberId, offer) => {
    await createPeerConnection(MemberId) // Peer bağlantısı oluşturulur

    await peerConnection.setRemoteDescription(offer) // Uzak teklif, peerConnection'a atanır

    let answer = await peerConnection.createAnswer() // Yanıt oluşturulur
    await peerConnection.setLocalDescription(answer) // Yerel yanıt, peerConnection'a atanır

    client.sendMessageToPeer({text:JSON.stringify({'type':'answer', 'answer':answer})}, MemberId) // Yanıt karşı tarafa gönderilir
}

let addAnswer = async (answer) => {
    if(!peerConnection.currentRemoteDescription){
        peerConnection.setRemoteDescription(answer) // Uzak yanıt, peerConnection'a atanır
    }
}

let leaveChannel = async () => {
    await channel.leave() // Kanaldan ayrılma işlemi gerçekleştirilir
    await client.logout() // İstemci oturumu kapatılır
}

let toggleCamera = async () => {
    let videoTrack = localStream.getTracks().find(track => track.kind === 'video') // Kamera akışı alınır

    if(videoTrack.enabled){
        videoTrack.enabled = false // Kamera akışı devre dışı bırakılır
        document.getElementById('camera-btn').style.backgroundColor = 'rgb(255, 80, 80)' // Kamera düğmesinin arkaplan rengi değiştirilir
    }else{
        videoTrack.enabled = true // Kamera akışı etkinleştirilir
        document.getElementById('camera-btn').style.backgroundColor = 'rgb(179, 102, 249, .9)' // Kamera düğmesinin arkaplan rengi değiştirilir
    }
}

let toggleMic = async () => {
    let audioTrack = localStream.getTracks().find(track => track.kind === 'audio') // Ses akışı alınır

    if(audioTrack.enabled){
        audioTrack.enabled = false // Ses akışı devre dışı bırakılır
        document.getElementById('mic-btn').style.backgroundColor = 'rgb(255, 80, 80)' // Mikrofon düğmesinin arkaplan rengi değiştirilir
    }else{
        audioTrack.enabled = true // Ses akışı etkinleştirilir
        document.getElementById('mic-btn').style.backgroundColor = 'rgb(179, 102, 249, .9)' // Mikrofon düğmesinin arkaplan rengi değiştirilir
    }
}

window.addEventListener('beforeunload', leaveChannel) // Sayfa kapatıldığında veya yeniden yüklendiğinde kanaldan ayrılma işlemi gerçekleştirilir

document.getElementById('camera-btn').addEventListener('click', toggleCamera) // Kamera düğmesi tıklama olayı dinlenir
document.getElementById('mic-btn').addEventListener('click', toggleMic) // Mikrofon düğmesi tıklama olayı dinlenir

init() // Uygulama başlatılır

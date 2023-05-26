![WebRTC_block_diagram (8)](https://github.com/yildiraysabanci/RobotOL/assets/98615464/b0b5cc2b-2d7b-4ada-9e3d-20b1b78e94bc)

WebRTC'de kullanılan TURN (Traversal Using Relays around NAT) sunucusu, peer-to-peer bağlantı kurma sürecinde NAT engellerini aşmak için kullanılır. TURN sunucusu, iki cihaz arasında veri aktarımını yönlendiren ve aracılık eden bir sunucudur. Bu sunucu, doğrudan bağlantı kurulamadığında veri iletimini sağlamak için bir güvenilir aracı görevi görür.

TURN sunucusunun işlevi aşağıdaki adımları içerir:

1. Reflexive Adresin Algılanması: WebRTC uygulaması, STUN (Session Traversal Utilities for NAT) sunucusunu kullanarak reflexive adresini tespit etmeye çalışır. Reflexive adres, uygulamanın gerçek IP adresine en yakın dış ağ IP adresini temsil eder. Ancak, bazı durumlarda STUN sunucusu kullanılamaz veya NAT engelleri aşılabilir.

2. Bağlantı Kurulamaması Durumu: Eğer iki cihaz doğrudan bağlantı kuramazsa (örneğin, her iki cihaz da NAT engelleri ile karşılaşır), TURN sunucusu devreye girer. Bu durumda, her iki cihaz da TURN sunucusuna bağlanarak veri iletimini gerçekleştirir.

3. Veri Yönlendirme: TURN sunucusu, veri paketlerini alır ve kaynak cihazdan hedef cihaza iletmek için aracılık eder. İletim, TURN sunucusu üzerinden gerçekleşir, böylece iki cihaz arasında doğrudan bağlantı olmadan veri akışı sağlanabilir.

4. Güvenlik: TURN sunucusu, veri iletimi sırasında güvenlik sağlamak için kimlik doğrulama ve yetkilendirme mekanizmalarını kullanır. Bu sayede, güvenli bir iletişim ortamı sağlanır.

TURN sunucusu, NAT engelleri, simetrik NAT'lar veya ağ üzerindeki diğer engeller nedeniyle doğrudan bağlantı kurulamadığında devreye girer. Özellikle, bazı ağlarda kullanıcıların gerçek IP adreslerini gizlemek amacıyla kullanılan simetrik NAT'lar, peer-to-peer bağlantı kurmaya engel olabilir. TURN sunucusu, veri akışını sağlamak için güvenilir bir ortam sunar ve NAT traversal sorunlarını aşmayı mümkün kılar.

WebRTC uygulamaları, TURN sunucusunu kullanmak için gerekli adres ve kimlik bilgilerini bilmelidir. Bu bilgiler genellikle uygulama tarafından yapılandırılır veya sunucu sağlayıcısı tarafından sağlanır.

Özetle, TURN sunucusu, NAT engelleri veya ağ üzerindeki diğer zorluklar nedeniyle doğrudan bağlantı kurulamadığında ver

i iletimini sağlamak için kullanılan bir sunucudur. TURN sunucusu, veri paketlerini yönlendirir ve güvenli bir iletişim ortamı sağlar.

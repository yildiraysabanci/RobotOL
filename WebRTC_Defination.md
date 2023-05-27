![WebRTC_block_diagram (1)](https://github.com/yildiraysabanci/RobotOL/assets/98615464/c9b122c0-8a51-42b9-8925-c968851cbdd9)

Yukarida çizimi yapılmış olan şekil, RobotOL ekibi tarafından gerçekleştirilmesi planlanan bir projenin internet altyapısında kullanılması amaçlanan WebRTC teknolojisinin blok diyagramını göstermektedir.

WebRTC (Web Real-Time Communication), açık bir web standartı olarak geliştirilen ve gerçek zamanlı iletişim ve medya paylaşımı için kullanılan bir teknolojidir. İnternet tarayıcıları arasında doğrudan peer-to-peer bağlantılar kurarak, kullanıcıların ses, video ve veri paylaşımı yapmalarını sağlar.

WebRTC'nin temel bileşenleri şunlardır:

MediaStream: Kullanıcının mikrofon, kamera veya ekran gibi medya kaynaklarını temsil eder. MediaStream, medya akışını tarayıcıya sağlar.

RTCPeerConnection: İki tarayıcı arasında doğrudan bağlantı kurmak ve medya akışını iletmek için kullanılır. RTCPeerConnection, medya akışlarını şifreler, sıkıştırır ve ağ trafiğini yönetir.

RTCDataChannel: Tarayıcılar arasında veri paylaşımı için güvenli bir kanal sağlar. RTCDataChannel, yüksek hızlı veri iletimini destekler ve odağı ses ve video iletişiminden farklı veri türlerine yönlendirir.

WebRTC, gerçek zamanlı iletişim için RTP (Real-Time Transport Protocol) ve RTCP (Real-Time Control Protocol) gibi protokolleri kullanır. Ayrıca, P2P bağlantıları kurmak için ICE (Interactive Connectivity Establishment) protokolünü, NAT ve firewall engellerini aşmak için STUN (Session Traversal Utilities for NAT) ve TURN (Traversal Using Relays around NAT) sunucularını kullanır.

WebRTC, geniş bir uygulama yelpazesine sahiptir. Aşağıdaki alanlarda yaygın olarak kullanılmaktadır:

Sesli ve görüntülü görüşmeler: WebRTC, tarayıcı üzerinden yüksek kaliteli sesli ve görüntülü görüşmeler yapılmasını sağlar.

Web konferansları: WebRTC, çoklu kullanıcılı web konferansları ve toplantıları için kullanılabilir.

Dosya paylaşımı: WebRTC, kullanıcıların tarayıcıları aracılığıyla dosya paylaşmasını ve transfer etmesini sağlar.

Ekran paylaşımı: WebRTC, kullanıcıların tarayıcı ekranlarını paylaşmalarını ve birlikte çalışmalarını sağlar.

Oyunlar ve eğlence uygulamaları: WebRTC, tarayıcı üzerinden çok oyunculu oyunlar, video akışları ve interaktif eğlence uygulamaları için kullanılabilir.

WebRTC'nin ana avantajları arasında kullanım kolaylığı, tarayıcı tabanlı çalışma, düşük gecikme süresi, yüksek kaliteli medya aktarımı ve güvenli iletişim yer alır. Aynı zamanda açık kaynaklı bir teknoloji ol
  


![WebRTC_block_diagram (7)](https://github.com/yildiraysabanci/RobotOL/assets/98615464/3bba8b22-8f1c-4daa-9bb7-35766e37b9d9)
# WebRTC ICE Cadidate<br>

WebRTC'de kullanılan ICE (Interactive Connectivity Establishment) adayları, peer-to-peer bağlantı kurmak için kullanılan ağ bağlantı noktalarını temsil eder. ICE adayları, her bir cihazın ağ üzerindeki IP adresleri, port numaraları ve NAT türleri gibi ağ bilgilerini içerir. ICE adayları, bağlantı noktalarının keşfedilmesi ve doğru bağlantıların oluşturulması için kullanılır.

## ICE adaylarının işlevi aşağıdaki adımları içerir

1. Adayların Oluşturulması: Her WebRTC uygulaması, kendi cihazının bağlantı noktalarına (IP adresleri ve port numaraları) ait adayları oluşturur. Bu adaylar, kullanılan ağa ve NAT türüne bağlı olarak farklı olabilir.

2. Adayların Toplanması: Uygulama, yerel adaylarını oluşturduktan sonra, karşı taraftan gelen adayları toplar. Karşı tarafın adayları, sinyalleşme sunucusu aracılığıyla alınabilir. Bu adaylar, karşı tarafın ağ bağlantı noktalarını temsil eder.

3. Adresleme ve Uyumluluk Kontrolü: Her uygulama, toplanan adayları kullanarak uygun bağlantı noktalarını belirlemeye çalışır. Bu işlem, ağ adreslerinin ve NAT türlerinin karşılaştırılmasıyla gerçekleştirilir. Ağ adresleri ve NAT türleri uyumlu olan adaylar, doğrudan bağlantı kurmak için potansiyel adaylar olarak seçilir.

4. Aday Sıralaması: Seçilen adaylar, bağlantı kalitesi ve erişilebilirlik gibi faktörlere göre sıralanır. Bu sıralama, daha iyi performans ve daha güvenilir bir bağlantı sağlamak için kullanılır.

5. Bağlantı Kurma: WebRTC uygulamaları, karşılıklı olarak seçilen adayları birbirlerine iletir ve doğrudan bağlantı kurmak için gereken bilgileri alışveriş eder. Bu bilgiler, ağ adresleri, port numaraları ve diğer bağlantı parametrelerini içerir.

ICE adayları, WebRTC uygulamalarının ağ üzerindeki engelleri aşarak doğrudan bağlantı kurmasına yardımcı olur. Her uygulama, kendi yerel adaylarını oluşturur ve karşı taraftan gelen adayları toplayarak en uygun bağlantı noktalarını belirler. Bu sayede, NAT cihazları ve ağ üzerindeki diğer engellerden etkilenmeden doğru bağlantılar kurulabilir.

ICE adayları, STUN (Session Traversal Utilities for NAT) ve TURN (Traversal

 Using Relays around NAT) protokollerini kullanarak bağlantı kurmayı deneyebilir. STUN sunucusu, reflexive adresleri tespit etmek için kullanılırken, TURN sunucusu, NAT traversal için bir güvenilir yol sağlar.

Özetle, ICE adayları, WebRTC uygulamalarının bağlantı noktalarını belirleyerek doğrudan bağlantı kurmalarını sağlayan ağ bağlantı noktalarını temsil eder. Bu sayede, NAT engelleri ve ağ üzerindeki diğer zorluklar aşılarak güvenilir ve kaliteli bir peer-to-peer iletişim sağlanabilir.

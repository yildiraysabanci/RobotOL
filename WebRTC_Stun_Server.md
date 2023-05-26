![WebRTC_block_diagram (5)](https://github.com/yildiraysabanci/RobotOL/assets/98615464/05441424-1bc4-4dfe-b246-88181922b673)

WebRTC'de kullanılan STUN (Session Traversal Utilities for NAT) sunucusu, ağ üzerindeki Network Address Translation (NAT) cihazlarını aşmak için kullanılır. STUN sunucusunun temel işlevi, bir cihazın gerçek IP adresini ve bağlantı noktalarını belirlemek ve NAT engellerini aşarak doğrudan bağlantı kurabilmek için yardımcı olmaktır.

STUN sunucusunun çalışma süreci aşağıdaki adımları içerir:

1. IP Adresi Tespiti: WebRTC uygulaması, STUN sunucusuna bağlanarak gerçek IP adresini belirlemek için bir mesaj gönderir. Bu mesajda uygulama, STUN sunucusuna kendi IP adresini ve bağlantı noktasını bildirir.

2. NAT Algılama: STUN sunucusu, aldığı mesajı analiz ederek uygulamanın arkasındaki NAT cihazını tespit etmeye çalışır. NAT cihazı, ağdaki IP adreslerini dönüştürerek iç ağ ile dış ağ arasında iletişimi sağlar.

3. Reflexive Adresin Alınması: STUN sunucusu, uygulamanın mesajını alır ve gerçek IP adresi ve bağlantı noktasının NAT cihazı tarafından dönüştürülüp dönüştürülmediğini kontrol eder. STUN sunucusu, bu kontrol sonucunda uygulamanın NAT cihazı tarafından verilen bir "reflexive adres"e sahip olup olmadığını belirler. Reflexive adres, uygulamanın gerçek IP adresine en yakın dış ağ IP adresini temsil eder.

4. Reflexive Adresin İletilmesi: STUN sunucusu, uygulamaya geri dönüş yaparak reflexive adresi ileterek NAT cihazının arkasında bulunan gerçek IP adresini ve bağlantı noktasını bildirir.

STUN sunucusu, WebRTC uygulamalarının NAT engellerini aşmalarına yardımcı olur. NAT cihazları, birçok ağda yaygın olarak kullanılır ve genellikle iç ağdaki IP adreslerini dış ağa dönüştürerek iletişimi sağlar. Bu nedenle, iki WebRTC uygulaması doğrudan bağlantı kurmaya çalıştığında, NAT engelleri nedeniyle doğrudan bağlantı kuramazlar. STUN sunucusu, uygulamaların reflexive adresleri aracılığıyla birbirlerini bulmalarını ve doğrudan bağlantı kurmalarını sağlar.

WebRTC uygulaması, STUN sunucusuna erişim sağlamak için STUN sunucusunun adresini ve port numarasını bilmelidir. WebRTC kütüphaneleri, genellikle varsayılan olarak bazı genel STUN sunucularının adreslerini içerir. Ancak, ö

zel bir STUN sunucusu da kullanılabilir ve uygulama tarafından belirtilmesi gerekebilir.

Özetle, STUN sunucusu, WebRTC uygulamalarının NAT engellerini aşarak doğrudan bağlantı kurabilmesine yardımcı olan bir sunucudur. Bu, uygulamaların gerçek IP adreslerini ve reflexive adreslerini belirlemelerini sağlar ve doğrudan peer-to-peer bağlantı kurulmasına olanak tanır.

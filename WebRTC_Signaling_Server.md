![WebRTC_block_diagram (2)](https://github.com/yildiraysabanci/RobotOL/assets/98615464/e6b81e47-ed05-48a1-8dbd-0ad4b78d653d)
WebRTC'de kullanılan sinyalleşme sunucusu (signaling server), WebRTC uygulamaları arasında iletişim kurmak ve bilgileri paylaşmak için kullanılan bir sunucudur. Sinyalleşme sunucusu, WebRTC uygulamalarının bağlantı kurabilmesi için gereken ağ bilgileri, oturum yönetimi ve iletişim parametreleri gibi bilgilerin paylaşılmasını sağlar.

Sinyalleşme sunucusunun temel işlevleri şunlardır:

1. Bağlantı oluşturma: İki veya daha fazla WebRTC uygulaması arasında doğrudan bağlantı kurmak için sinyalleşme sunucusu kullanılır. Uygulamalar, sunucuya bağlanarak kendi kimliklerini ve ağ bilgilerini paylaşırlar. Sunucu, bu bilgileri alarak uygulamalar arasında iletişim kurmalarını sağlayacak yönergeleri iletebilir.

2. Ağ bilgilerinin paylaşılması: WebRTC uygulamaları, peer-to-peer bağlantı kurabilmek için karşı tarafın IP adresi, port numarası, NAT türü gibi ağ bilgilerine ihtiyaç duyar. Bu bilgiler, sinyalleşme sunucusu aracılığıyla paylaşılır. Sunucu, bu bilgileri alıcıya ileterek doğru ağ adresine bağlantı kurmalarını sağlar.

3. Oturum yönetimi: WebRTC uygulamaları arasında yapılan oturumların başlatılması, sonlandırılması ve durumlarının takibi sinyalleşme sunucusu tarafından yönetilir. Bağlantı kurulduğunda, sunucu uygulamalar arasında oturum bilgilerini paylaşarak oturumun doğru şekilde yönetilmesini sağlar.

4. İletişim parametrelerinin paylaşılması: WebRTC uygulamaları arasında kullanılan codec bilgileri, medya türleri, kullanılacak protokoller gibi iletişim parametreleri sinyalleşme sunucusu aracılığıyla paylaşılır. Bu sayede uygulamalar, doğru medya formatını kullanarak veri ve medya iletimini gerçekleştirebilir.

Sinyalleşme sunucusu, genellikle WebSocket, HTTPS veya HTTP üzerinde çalışan bir uygulama sunucusu olarak implemente edilir. Sinyalleşme protokolü olarak genellikle JSON veya SDP (Session Description Protocol) kullanılır. Bu protokoller aracılığıyla uygulamalar, gerekli bağlantı bilgilerini alışveriş eder ve doğru bağlantıları kurar.

Önemli bir nokta, WebRTC sinyalleşme sunucusunun sadece iletişim bilgilerini paylaşmak için kullanıldığıdır. Veri veya medya iletimi doğrudan kullanıcılar

 arasında gerçekleşir. Sinyalleşme sunucusu, bağlantı oluşturmak ve uygun parametreleri paylaşmak için bir araç olarak kullanılır.

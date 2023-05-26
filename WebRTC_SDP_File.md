![WebRTC_block_diagram (4)](https://github.com/yildiraysabanci/RobotOL/assets/98615464/b2a7460d-752d-4826-bfea-a874b2dbaf49)

SDP (Session Description Protocol), WebRTC'de kullanılan bir protokoldür ve WebRTC oturumlarında iletişim parametrelerini tanımlamak ve paylaşmak için kullanılır. SDP, oturumun özelliklerini, medya özelliklerini, codec bilgilerini ve ağ bilgilerini içeren bir metin tabanlı bir dosyadır.

SDP dosyasının temel işlevleri şunlardır:

1. Oturum Bilgileri: SDP dosyası, oturumun kimlik bilgilerini, oturumun benzersiz bir tanımlayıcısını (session ID), oturumun başlangıç ve bitiş zamanlarını, oturumun kaynaklarını ve diğer ilgili oturum parametrelerini içerir.

2. Medya Özellikleri: SDP dosyası, iletişimde kullanılacak medya özelliklerini tanımlar. Bu, ses, video veya veri akışlarının formatını, çözünürlüğünü, bant genişliğini, codec bilgilerini ve diğer medya özelliklerini içerir.

3. Ağ Bilgileri: SDP dosyası, ağa ilişkin bilgileri içerir. Bu, IP adresleri, port numaraları, NAT türü ve diğer ağ parametrelerini içerir. Bu bilgiler, WebRTC uygulamalarının doğru ağ adresine bağlantı kurabilmesini sağlar.

SDP dosyasının içeriği, belirli bir oturumun özelliklerine bağlı olarak değişir. Örneğin, bir sesli görüşme oturumu için SDP dosyası, ses medya özelliklerini içerecek şekilde oluşturulurken, bir video konferans oturumu için SDP dosyası hem ses hem de video medya özelliklerini içerecek şekilde oluşturulur.

SDP dosyası, WebRTC uygulamaları arasında paylaşılır ve sinyalleşme sunucusu tarafından kullanılır. Uygulamalar, SDP dosyasını alarak oturum parametrelerini okur ve doğru bağlantıyı kurmak için gerekli bilgileri kullanır. SDP dosyası, hem başlatan (offer) tarafından hem de yanıtlayan (answer) tarafından paylaşılır ve karşılıklı olarak oturum parametreleri belirlenir.

SDP dosyası genellikle teklif-cevap (offer-answer) modeline göre paylaşılır. Başlatan taraf bir teklif (offer) SDP dosyasını oluşturur ve yanıtlayan taraf bu teklife yanıt olarak bir cevap (answer) SDP dosyasını oluşturur. Bu SDP dosyaları aracılığıyla uygulamalar oturum parametrelerini anlaşarak uyumlu bir bağlantı kurabilir.

Özetle, SDP dosyası, WebRTC oturumlarında iletişim parametreler

ini tanımlayan ve paylaşan bir metin tabanlı dosyadır. Oturum, medya özellikleri ve ağ bilgileri gibi önemli bilgileri içerir ve WebRTC uygulamaları arasında bağlantı kurma sürecini yönlendirir.

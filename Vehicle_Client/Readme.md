Bu Dockerfile dosyası, Python 3.9 temelinde bir Docker imajı oluşturur. Ardından, gereken Python paketlerini (opencv-python ve flask) yükler ve app.py dosyasını konteynır içine kopyalar. Son olarak, konteynır başlatıldığında app.py dosyasını çalıştırır.

Bu iki dosyayı aynı dizine kaydedin ve aşağıdaki komutu kullanarak Docker imajını oluşturun:

```bash
docker build -t camera-streamer .
```

Bu komut, mevcut dizindeki Dockerfile dosyasına göre Docker imajını oluşturur. İmajın adını camera-streamer olarak belirttik.

Docker imajını başarıyla oluşturduktan sonra, aşağıdaki komutu kullanarak Docker konteynırını başlatabilirsiniz:

```bash
docker run -d -p 8001:8001 camera-streamer

```

Bu komut, camera-streamer adlı Docker imajından bir konteynır başlatır ve yerel 8001 numaralı porta yönlendirir.

Artık Docker konteynırı, Raspberry Pi 4'teki kamera veri akışını 8001 numaralı port üzerinden sağlayacaktır. Örneğin, tarayıcınızda http://<Raspberry_Pi_IP>:8001/stream adresine giderek kamera medya akışını görüntüleyebilirsiniz.

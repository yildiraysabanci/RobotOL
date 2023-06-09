Bu Dockerfile dosyası, Python 3.9 temelinde bir Docker imajı oluşturur. Ardından, gereken Python paketlerini (opencv-python ve flask) yükler ve app.py dosyasını konteynır içine kopyalar. Son olarak, konteynır başlatıldığında app.py dosyasını çalıştırır.

Bu iki dosyayı aynı dizine kaydedin ve aşağıdaki komutu kullanarak Docker imajını oluşturun:

docker build -t camera-streamer .

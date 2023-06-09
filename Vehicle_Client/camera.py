import cv2
import numpy as np
from flask import Flask, Response

app = Flask(__name__)

def generate_frames():
    camera = cv2.VideoCapture(0)  # Kamera cihazının indeksi ayarlanabilir (0, 1, 2, ...)
    
    while True:
        success, frame = camera.read()  # Kameradan bir video çerçevesi alınır
        
        if not success:
            break
        
        # Çerçeve işleme işlemleri yapılabilir (isteğe bağlı)
        
        ret, buffer = cv2.imencode('.jpg', frame)  # Çerçeve JPEG formatına dönüştürülür
        frame = buffer.tobytes()  # Çerçeve baytlara dönüştürülür
        
        # Çerçeve baytları bir port üzerinden yayınlanır
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/stream')
def stream():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8001)

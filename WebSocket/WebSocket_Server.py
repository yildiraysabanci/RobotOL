import asyncio
import websockets

async def handle_client(websocket, path):
    try:
        while True:
            message = await websocket.recv()  # İstemciden gelen mesajı al
            print(f"Received message: {message}")  # Alınan mesajı ekrana yazdır
            await websocket.send(f"Server received your message: {message}")  # İstemciye mesajı geri gönder
    except websockets.exceptions.ConnectionClosedError:
        print("Client disconnected")  # İstemcinin bağlantısı kesildiğinde bağlantı hatası mesajı yazdır

start_server = websockets.serve(handle_client, '0.0.0.0', 8080)  # 0.0.0.0 tüm arayüzleri dinlemek için

asyncio.get_event_loop().run_until_complete(start_server)  # Sunucuyu başlat
asyncio.get_event_loop().run_forever()  # Sunucuyu sürekli çalışır halde tut

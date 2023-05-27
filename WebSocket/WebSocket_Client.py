import asyncio
import websockets

async def connect_to_server():
    uri = "ws://95.12.41.109:8080"  # Sunucu adresi ve portu belirlenir
    async with websockets.connect(uri) as websocket:  # Sunucuya bağlanılır
        while True:
            message = input("Enter a message: ")  # Kullanıcıdan bir mesaj girilir
            await websocket.send(message)  # Mesaj sunucuya gönderilir
            response = await websocket.recv()  # Sunucudan gelen yanıt alınır
            print(f"Server response: {response}")  # Sunucudan gelen yanıt ekrana yazdırılır

asyncio.get_event_loop().run_until_complete(connect_to_server())  # Sunucuya bağlantı sağlanır

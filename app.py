from flask import Flask, request, jsonify
import psycopg2
from dotenv import load_dotenv
import os

# Cargar variables de entorno
load_dotenv()

# Configurar Flask
app = Flask(__name__)

# Conectar a la base de datos PostgreSQL
DATABASE_URL = os.getenv("DATABASE_PUBLIC_URL")

try:
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()
    print("✅ Conexión a la base de datos exitosa")
except Exception as e:
    print(f"❌ Error al conectar a la base de datos: {e}")
    exit()

# Ruta principal
@app.route('/')
def home():
    return "¡Servidor Flask funcionando correctamente!"

# Ruta para guardar el historial de partidas
@app.route('/guardar_partida', methods=['POST'])
def guardar_partida():
    data = request.json  # Recibir datos en formato JSON
    player1 = data.get("player1")
    player2 = data.get("player2")
    winner = data.get("winner")
    date = data.get("date")

    if not player1 or not player2 or not winner or not date:
        return jsonify({"error": "Faltan datos"}), 400

    try:
        cursor.execute("INSERT INTO game_history (player1, player2, winner, date) VALUES (%s, %s, %s, %s)",
                       (player1, player2, winner, date))
        conn.commit()
        return jsonify({"message": "Partida guardada correctamente"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Ruta para obtener el historial de partidas
@app.route('/historial', methods=['GET'])
def obtener_historial():
    try:
        cursor.execute("SELECT * FROM game_history ORDER BY id DESC LIMIT 10")
        partidas = cursor.fetchall()
        return jsonify(partidas), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Iniciar la aplicación Flask
if __name__ == '__main__':
    app.run(debug=True)

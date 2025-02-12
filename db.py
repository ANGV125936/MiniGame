import psycopg2
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

try:
    # Conectar a la base de datos
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()

    # Crear la tabla si no existe
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS game_history (
            id SERIAL PRIMARY KEY,
            player1 VARCHAR(50),
            player2 VARCHAR(50),
            choice1 VARCHAR(10),
            choice2 VARCHAR(10),
            winner VARCHAR(50),
            rounds_played INTEGER,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)

    conn.commit()
    print("✅ Tabla 'game_history' creada o ya existe")
    
    cursor.close()
    conn.close()
except Exception as e:
    print(f"❌ Error: {e}")

const easyWords = [ 
  { "word": "sol", "hint": "Estrella que da luz y calor a la Tierra." },
  { "word": "luna", "hint": "Satelite natural de la Tierra." },
  { "word": "gato", "hint": "Un animal domestico felino." },
  { "word": "perro", "hint": "El mejor amigo del hombre." },
  { "word": "mesa", "hint": "Mueble con una superficie plana sostenida por patas." },
  { "word": "flor", "hint": "Parte reproductiva de una planta." },
  { "word": "agua", "hint": "Liquido transparente e incoloro." },
  { "word": "viento", "hint": "Movimiento del aire." },
  { "word": "nieve", "hint": "Agua congelada que cae del cielo." },
  { "word": "cielo", "hint": "Espacio que vemos desde la Tierra." },
  { "word": "luz", "hint": "Fenomeno que permite ver." },
  { "word": "hoja", "hint": "Parte de la planta donde ocurre la fotosintesis." },
  { "word": "rojo", "hint": "Color primario." },
  { "word": "fruta", "hint": "Producto comestible que da la planta." },
  { "word": "nube", "hint": "Condensacion de vapor de agua en el aire." },
  { "word": "lago", "hint": "Cuerpo de agua rodeado de tierra." },
  { "word": "tren", "hint": "Medio de transporte sobre rieles." },
  { "word": "puerta", "hint": "Elemento que sirve para abrir o cerrar un espacio." },
  { "word": "cama", "hint": "Mueble usado para dormir." },
  { "word": "rayo", "hint": "Descarga de electricidad en la atmosfera." },
  { "word": "ola", "hint": "Movimiento del agua en el mar." },
  { "word": "rosa", "hint": "Flor de color rojo o blanco." },
  { "word": "piedra", "hint": "Roca pequena." },
  { "word": "sombrero", "hint": "Prenda que se coloca en la cabeza." },
  { "word": "dientes", "hint": "Parte de la boca usada para masticar." },
  { "word": "leche", "hint": "Liquido blanco producido por mamiferos." },
  { "word": "manzana", "hint": "Fruta de color rojo o verde." },
  { "word": "huevo", "hint": "Producto de los animales oviparos." },
  { "word": "zapato", "hint": "Prenda de vestir para los pies." },
  { "word": "plaza", "hint": "Espacio abierto en una ciudad." }
  
];

const mediumWords = [
  { "word": "computadora", "hint": "Dispositivo que se usa para realizar calculos complejos y procesar informacion." },
  { "word": "bicicleta", "hint": "Vehiculo de dos ruedas impulsado manualmente." },
  { "word": "telefono", "hint": "Dispositivo de telecomunicaciones para enviar y recibir voz." },
  { "word": "refrigerador", "hint": "Aparato electrodomestico para enfriar y conservar alimentos." },
  { "word": "lavadora", "hint": "Maquina que limpia ropa usando agua y detergente." },
  { "word": "juguete", "hint": "Objeto con el que juegan los ninos." },
  { "word": "pelota", "hint": "Bola usada en diversos deportes." },
  { "word": "camisa", "hint": "Prenda de vestir que cubre la parte superior del cuerpo." },
  { "word": "pelicula", "hint": "Produccion cinematografica." },
  { "word": "espejo", "hint": "Superficie que refleja la luz." },
  { "word": "estufa", "hint": "Aparato para calentar alimentos o el ambiente." },
  { "word": "raton", "hint": "Dispositivo para mover el cursor en una computadora." },
  { "word": "ventilador", "hint": "Aparato para mover aire y refrescar." },
  { "word": "radio", "hint": "Dispositivo para escuchar sonidos y musica." },
  { "word": "pintura", "hint": "Sustancia usada para pintar." },
  { "word": "alcalde", "hint": "Persona encargada de la administracion de un municipio." },
  { "word": "bicicross", "hint": "Deporte de carreras con bicicletas." },
  { "word": "automovil", "hint": "Vehiculo de transporte de personas o carga." },
  { "word": "plaza", "hint": "Espacio abierto en una ciudad." },
  { "word": "ordenador", "hint": "Sinonimo de computadora." },
  { "word": "robot", "hint": "Maquina programable que realiza tareas." },
  { "word": "caja", "hint": "Contenedor cuadrado usado para guardar cosas." },
  { "word": "ventana", "hint": "Abertura en la pared para permitir la entrada de luz." },
  { "word": "bano", "hint": "Habitacion usada para higiene personal." },
  { "word": "vacuna", "hint": "Sustancia para prevenir enfermedades." },
  { "word": "rueda", "hint": "Objeto circular que gira para desplazar algo." }
];

const hardWords = [
  { "word": "electrodomestico", "hint": "Aparato electrico para uso domestico que facilita tareas." },
  { "word": "anticonstitucionalmente", "hint": "Accion ejecutada en violacion de la constitucion." },
  { "word": "paralelepipedo", "hint": "Solido geometrico con caras opuestas paralelas." },
  { "word": "otorrinolaringologo", "hint": "Especialista en oido, nariz y garganta." },
  { "word": "esternocleidomastoideo", "hint": "Musculo del cuello que facilita la rotacion de la cabeza." },
  { "word": "cardiovascular", "hint": "Relacionado con el sistema del corazon y vasos sanguineos." },
  { "word": "proteinas", "hint": "Macromoleculas esenciales formadas por aminoacidos." },
  { "word": "dinamometro", "hint": "Dispositivo utilizado para medir fuerzas." },
  { "word": "helicoptero", "hint": "Aeronave con rotores que permite vuelo vertical." },
  { "word": "pantalla", "hint": "Superficie electronica que muestra imagenes o informacion." },
  { "word": "clorofila", "hint": "Pigmento verde esencial para la fotosintesis." },
  { "word": "celula", "hint": "Unidad fundamental de los seres vivos." },
  { "word": "transporte", "hint": "Proceso de desplazamiento de personas o cosas." },
  { "word": "metamorfosis", "hint": "Transformacion biologica que involucra etapas radicalmente distintas." },
  { "word": "geometria", "hint": "Rama de las matematicas enfocada en figuras y formas." },
  { "word": "gramatica", "hint": "Estudio de las reglas y estructura de una lengua." },
  { "word": "ecosistema", "hint": "Conjunto de organismos y su entorno interconectado." },
  { "word": "hidrocarburo", "hint": "Compuesto quimico formado por carbono e hidrogeno." },
  { "word": "antropologia", "hint": "Estudio cientifico de las culturas y sociedades humanas." },
  { "word": "fotovoltaico", "hint": "Tecnologia que convierte la luz solar en electricidad." },
  { "word": "democracia", "hint": "Sistema de gobierno donde el poder reside en el pueblo." },
  { "word": "ciberespacio", "hint": "Entorno virtual de comunicacion en la red." },
  { "word": "silicon", "hint": "Elemento semiconductivo clave en la tecnologia." },
  { "word": "biotecnologia", "hint": "Aplicacion de procesos biologicos en la industria." },
  { "word": "ecologia", "hint": "Estudio de las interacciones entre organismos y su ambiente." },
  { "word": "historia", "hint": "Narracion y analisis de hechos del pasado." },
  { "word": "electrico", "hint": "Relacionado con la produccion o transmision de electricidad." }
];
  
const nearlyImpossibleWords = [
  { "word": "drupa", "hint": "Tipo de fruta con una sola semilla en su interior." },
  { "word": "columna", "hint": "Estructura vertical que soporta una carga." },
  { "word": "algoritmo", "hint": "Secuencia de pasos para realizar una tarea o resolver un problema." },
  { "word": "bioquimica", "hint": "Estudio de los procesos quimicos en los seres vivos." },
  { "word": "transmutacion", "hint": "Cambio de una sustancia en otra mediante un proceso quimico o fisico." },
  { "word": "vorticidad", "hint": "Magnitud que describe el movimiento de rotacion de un fluido." },
  { "word": "nucleofilia", "hint": "Tendencia de una especie quimica a donar un par de electrones." },
  { "word": "kinetica", "hint": "Estudio de los movimientos y energias de los cuerpos." },
  { "word": "exoplaneta", "hint": "Planeta que orbita una estrella fuera del sistema solar." },
  { "word": "antropocentrismo", "hint": "Doctrina que considera al ser humano como centro del universo." },
  { "word": "psicofarmacologia", "hint": "Estudio de los efectos de las drogas en el comportamiento." },
  { "word": "fluctuacion", "hint": "Cambio o variacion de algo, especialmente en un contexto economico." },
  { "word": "exudado", "hint": "Liquido que se desprende de los tejidos hacia el exterior del cuerpo." },
  { "word": "ionosfera", "hint": "Capa de la atmosfera que contiene partículas cargadas." },
  { "word": "quimiotaxis", "hint": "Movimiento de organismos en respuesta a sustancias quimicas." },
  { "word": "solenoide", "hint": "Bobina enrollada que produce un campo magnetico cuando circula corriente." },
  { "word": "oxidos", "hint": "Compuestos quimicos formados por oxigeno y otro elemento." },
  { "word": "biomolecula", "hint": "Molecula presente en los seres vivos, como proteinas o acidos nucleicos." },
  { "word": "endoplasma", "hint": "Parte del citoplasma de una celula eucariota." },
  { "word": "fotosintesis", "hint": "Proceso biologico mediante el cual las plantas producen su propio alimento." },
  { "word": "supernova", "hint": "Explosion estelar que libera una gran cantidad de energia." },
  { "word": "polimorfismo", "hint": "Capacidad de una sustancia para adoptar diferentes formas." }
];

  
export { easyWords, mediumWords, hardWords, nearlyImpossibleWords };

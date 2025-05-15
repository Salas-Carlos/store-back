## Store Back-End

Este proyecto es el back-end para la integración con la pasarela de pagos Wompi. Proporciona una API para gestionar pagos, transacciones y otros servicios relacionados.

## Características

- Integración con la API de Wompi.
- Gestión de transacciones y pagos.

## Requisitos

- Node.js >= 14.x
- npm >= 6.x
- Base de datos (PostgreSQL)

## Instalación

1. Clona este repositorio:
  ```bash
  git clone https://github.com/Salas-Carlos/store-back.git
  ```
2. Instala las dependencias:
  ```bash
  npm install
  ```
3. Configura las variables de entorno en un archivo `.env`.

## Uso

1. Inicia el servidor:
  ```bash
  npm start
  ```
2. Accede a la API en `http://localhost:3000`.

## Scripts

- `npm start`: Inicia el servidor.
- `npm run dev`: Inicia el servidor en modo desarrollo.

## Rutas

Las siguientes son las rutas disponibles en el proyecto:

- **`POST /cards`**  
  Crea el token de las tarjetas de credito.

- **`GET /products`**  
  Lista todos los productos disponibles en la DB para comprar.

- **`POST /transaction`**  
  Crea una transacción utilizando el token de la tarjeta y la información de cuanto se pagara

- **`GET /transaction/:id`**  
  Trae la información de una transacción en especifico


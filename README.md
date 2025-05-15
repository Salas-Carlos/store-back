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
  Crea el token de las tarjetas de crédito.  
  **Body**:  
  ```json
  {
    "numberCard": "4242424242424242", // Número de la tarjeta
    "cvc": "123", // Código de seguridad de la tarjeta (3 o 4 dígitos según corresponda)
    "expMonth": "08", // Mes de expiración (string de 2 dígitos)
    "expYear": "28", // Año de expiración (string de 2 dígitos)
    "cardHolder": "José Pérez" // Nombre del tarjetahabiente
  }
  ```
  
- **`GET /products`**  
  Lista todos los productos disponibles en la DB para comprar.

- **`POST /transaction`**  
  **Body**:  
```json
{
  "quantity": 2, // Cantidad de productos a comprar
  "productId": 1, // ID del producto a comprar
  "totalValue": 400000, // Valor total de la transacción
  "customerEmail": "carlos@test.com", // Correo electrónico del cliente
  "cardToken": "token" // Token de la tarjeta generado previamente
}
```
  Crea una transacción utilizando el token de la tarjeta y la información de cuanto se pagara

- **`GET /transaction/:id`**  
  Trae la información de una transacción en especifico


# CarRental
API RESTful CarRental

Ejecucion del proyecto:
Para ejecutar el proyecto debe tener instalado NodeJs, VisualStudio Code y Postman
 1. Abrir en VisualStudio Code la carpeta del proyecto e iniciar una nueva terminal.
 2. Escribir en la terminar el comando "npm start" para iniciar el servidor en localhost.
 3. Abrir Postman para hacer las consultas del API.
 4. Realizar las consultas del API.
 
 Endpoints:
 
 1. VISUALIZAR LISTA DE AUTOS DISPONIBLES PARA ALQUILER
    http://localhost:3000/carList
    
 2. CREAR ORDEN DE ALQUILER
    http://localhost:3000/order/create
    
    Debe enviar los siguientes parametros de entrada en formato json.
    {
    "username": "String",
    "brand": "String",
    "model": "String",
    "daysRented": Number
    }
    
 3. CREAR CUENTA DE USUARIO
    http://localhost:3000/user/create
    
    Debe enviar los siguientes parametros de entrada en formato json.
    {
    "username": "String",
    "name": "String",
    "lastname": "String",
    "gender": "String",
    age: Number
    }
    
 4. VISUALIZAR PERFIL DE USUARIO
    http://localhost:3000/user/profile/<username>
    NOTA: Debe enviar el username del que desea visualizar el perfil en el URL
    
 5. HISTORIAL DE AUTOS ALQUILADOS
    http://localhost:3000/order/history/<username>
    NOTA: Debe enviar el username del que desea visualizar el perfil en el URL
  
  NOTA GENERAL: La base de datos utilizada está almacenada en MongoDB. Esta base de datos cuenta con:
  1. Una colección para los autos que se pueden almacenar, esta contiene cuatro autos.
  2. Una colección para los usuarios creados, esta contiene 4 usuarios por defecto, con los username: User1, User2, User3, User4.
  3. Una colección para las ordenes registradas, por defecto continene 2 ordenes para el User1 y User2 y una para el User3 y User4.
    

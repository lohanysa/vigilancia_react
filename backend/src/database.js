const mongoose = require('mongoose')

//cadena de conexion, es una funcion de moongose
mongoose.connect(process.env.MONGODB_URI)//obtine la URI DE .ENV
  .then(() => console.log('Conectado a MongoDB Atlas'))//en caso de exitp
  .catch(err => console.error('Error de conexión:', err));//caso contrario



  /*const connection = mongoose.connection;

connection.once('open ', ()=>{
    console.log('se ha conectado la base de datos', URI)
})*/
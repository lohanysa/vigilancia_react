//la configuracion del server
//require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const geminiRoutes = require('./router/geminis_router');


//configuracion 
app.set('port', process.env.PORT || 4000)// aqui le decimos a app que nos guarde una variable
//en caso que no tenga la variable puerto entonces toma el puerto 4000


//loas middleware es para que se ejecute antes de ir a la ruta
app.use(cors())//para usar los midlewor de coors
app.use(express.json())//antes de ejecutar las consultas es para que entienda el json 

//rutas 
app.use('/api/gemini', geminiRoutes);

app.get('/', (req, res)=>{
    res.send('BIENBENIDO A MI API')
})
module.exports = app;
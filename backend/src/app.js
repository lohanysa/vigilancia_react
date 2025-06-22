//la configuracion del server
//require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

//configuracion 
app.set('port', process.env.PORT || 4000)// aqui le decimos a app que nos guarde una variable
//en caso que no tenga la variable puerto entonces toma el puerto 4000

module.exports = app;
//aqui se utiliza la configuracion del servidor
require('dotenv').config()

const app = require('./app')
require('./database')
//esta logica es para ejecutar el servidor

//funcion asyncrona 
async function main(){
     await app.listen(app.get('port'))//es como decirle que esto puede tardar asi que puedes hacer otra peticion mientas esta se procesa
     console.log('el server se esta ejecutando en el puerto ', app.get('port'));
}
   
main();
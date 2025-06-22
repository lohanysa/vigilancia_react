# Vigilancia_ciudadana
Plataforma que hace más fáciles de entender los documentos y leyes, y fomenta la participación ciudadana.


#Dpendencias necesarias para que el archivo back funcione
express

dotenv

mongose = es una libreria de node.js para facilitar las sentencias de la base de datos 

cors = esto permite que se puedan enviar y responder peticiones de servidores distintos (en este caso react y express, para que puedan comunicarse)

#ollama

utilizaremos el modelo phi3:mini, aunque el ollama3 funciona mejor ese modelo quema mi humilde GPU :v

>>ollama run phi3:3.8b-mini-128k-instruct-q4_0 ->modelo que funciona para documentos de 300 paginas.

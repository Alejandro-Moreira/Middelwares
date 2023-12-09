const express = require('express')

const app = express()

app.use(express.json())

//Middleware

app.get('/informacion',(req,res)=>{
     res.send("Información de los estudiantes")
 })

 app.get('/dashboard',(req,res)=>{
     res.send(`Bienvenido - Lista de estudiantes`)
 })

//Creacion del middleware
 app.use((req,res,next)=>{
     const{email,password} = req.body
     if (email === "moreiramikel11@gmail.com" && password === "123"){
         next()
     }else{
         res.send("Usuario no registrado")
     }
 })

 app.get('/estudiantes',(req,res)=>{
     res.send(`Bienvenido -${req.body.email} - Listo para visualizar la información`)
 })


 //Iniciar el servidor en el puerto 3000
app.listen(3000)
console.log("Web Server ejecutandose en el puerto 3000")
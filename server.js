const express = require('express')
const app = express()
const fs = require("fs");

require("dotenv").config();

const PORT = process.env.PORT;

const productos = [
   {
     title: "Escuadra",
     price: 123.45,
     thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
     id: 1
   },
   {
     title: "Calculadora",
     price: 234.56,
     thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
     id: 2
   },
   {
     title: "Globo Terráqueo",
     price: 345.67,
     thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
     id: 3
   }
  ]

array1 = [];
 const  functionArray =  ()=>{
 productos.forEach(e => array1.push(e.title))
}
functionArray();
const functionProductoAzar = ()=> {
   const NumeroAzar = Math.floor(Math.random()*array1.length);
   
   const Productoazar = array1[NumeroAzar];
   return Productoazar;
}

const Object1 = {
  name:"Producto1"
  
}
const Object2 = {
  name:"Producto2"
  
}
const Object3 = {
  name:"Producto3"
  
}

const array = [];
let contador = 1;
    

class Contenedor{
  constructor(nombreArchivo){
    this.nombreArchivo = nombreArchivo;
  }
  save(Object){
    Object.id = contador++;
    
    array.push(Object);

    console.log(Object.id);
    fs.writeFileSync(`${this.nombreArchivo}`,`${JSON.stringify(array)}`);
    
  }
  getById(Number){
      let id = fs.readFileSync(`${this.nombreArchivo}`,"utf-8");
      id = JSON.parse(id);
      if (id.id === Number){
        console.log(id);
      }else{
        console.log(null);
      }
  }
  getAll(){
   
    let objetos = fs.readFileSync(`${this.nombreArchivo}`,"utf-8");
    objetos = JSON.parse(objetos);
    array.push(objetos);
    console.log(array);
  }
  deleteById(Number){
    let objeto = fs.readFileSync(`${this.nombreArchivo}`,"utf-8");
    objeto = JSON.parse(objeto);
    
    objeto.forEach(object =>{
     
      const id = object.id;
      
     if (Number === id){
      const indice = objeto.indexOf(object)
      array.splice(indice,1)     
     }
        
      
  });
   
      fs.writeFileSync(`${this.nombreArchivo}`,`${JSON.stringify(array)}`);
    }
    
    
    
    deleteAll(){
      fs.writeFileSync(`${this.nombreArchivo}`,``)
    }
    
    
}

const contenedor = new Contenedor("productos.txt");
contenedor.save(Object1);
contenedor.save(Object2);
contenedor.save(Object3);










const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
 server.on("error", error => console.log(`Error en servidor ${error}`));
 


app.get('/productos', (_req, res) => {
    res.send(array1);
 })

 app.get('/productoRandom', (_req, res) => {
    res.send(functionProductoAzar())
 })
 
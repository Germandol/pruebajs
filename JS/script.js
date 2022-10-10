//productos básicos ordenados en objetos

let productoA = { nombre: "Carne", stock: 1000, precio: 1000 }
let productoB = { nombre: "Pollo", stock: 2000, precio: 900 }
let productoC = { nombre: "Vegetariana", stock: 500, precio: 800 }

//productos para complementar la hamburguesa ordenados en objetos

let complementoProductoA = { nombre: "lechuga", stock: 500, precio: 50 }
let complementoProductoB = { nombre: "tomate", stock: 600, precio: 100 }
let complementoProductoc = { nombre: "pepino", stock: 1000, precio: 50 }
let complementoProductoD = { nombre: "cebolla", stock: 500, precio: 50 }
let complementoProductoE = { nombre: "morron", stock: 700, precio: 100 }
let complementoProductoF = { nombre: "chedar", stock: 800, precio: 100 }
let complementoProductoG = { nombre: "huevo frito", stock: 800, precio: 200 }
let complementoProductoH = { nombre: "jamon", stock: 500, precio: 200 }
let complementoProductoI = { nombre: "panceta", stock: 600, precio: 200 }

let precioTotal = 0

//listas con arrays

let listaProductos = [productoA, productoB, productoC] 
let listaComplementosProducto = [complementoProductoA, complementoProductoB, complementoProductoc,          complementoProductoD, complementoProductoE, complementoProductoF, complementoProductoG, complementoProductoH, complementoProductoI ]

//filtro de nombres

let nombresListaProductos = listaProductos.map ((el) => el.nombre)
let nombresListaComplementosProductos = listaComplementosProducto.map ((el) => el.nombre)

//funciones

function complemento (){

let complementoElegido = prompt ("Cómo desea complementar su hamburguesa de \n - " + nombresListaComplementosProductos.join (" \n - ") + "\n - ESC-Salir" ) ;  
        if (complementoElegido.toUpperCase() != 'ESC'){
            switch (complementoElegido) {
                case "lechuga" :
                    alert ("Eligio una Hamburguesa de " + entrada + " y " + complementoElegido) ;
                    break; 
                case "tomate" :
                    alert ("Eligio una Hamburguesa de " + entrada + " y " + complementoElegido) ;
                    break; 
                case "pepino" :
                    alert ("Eligio una Hamburguesa de " + entrada + " y " + complementoElegido) ;
                    break;     
                case "cebolla" :
                    alert ("Eligio una Hamburguesa de " + entrada + " y " + complementoElegido) ;
                    break;    
                case "morron" :
                    alert ("Eligio una Hamburguesa de " + entrada + " y " + complementoElegido) ;
                    break;     
                case "chedar" :
                    alert ("Eligio una Hamburguesa de " + entrada + " y " + complementoElegido) ;
                    break;     
                case "huevo frito" :
                    alert ("Eligio una Hamburguesa de " + entrada + " y " + complementoElegido) ;
                    break; 
                case "jamon" :
                    alert ("Eligio una Hamburguesa de " + entrada + " y " + complementoElegido) ;
                    break; 
                case "panceta" :
                    alert ("Eligio una Hamburguesa de " + entrada + " y " + complementoElegido) ;
                    break; 
                default : 
                    alert ("Por favor elija una opcion correcta");
                    break;
        }  }
        else { 
            alert ("Gracias lo esperamos");}}

function calculoPrecio (cantidad, precio) {
    precioTotal += (cantidad * precio)
}

function calculoStock (cantidad, stock, precio){
    if(cantidad <= stock){
        complemento () ;       
        calculoPrecio (cantidad, precio);
            alert ("el total es: " + precioTotal)
            alert ("que Desea seguir eligiendo")
        }
        else{
            alert("Actualmente tenemos " + stock + " unidades de este producto")
        }}

//ciclo de compra


let entrada = prompt ("Cómo desea armar su Hamburguesa: \n - " + nombresListaProductos.join(" \n - ") + " \n - ESC-Salir") ;
while (entrada != "ESC") {
    if(entrada.toUpperCase() == 'CARNE'){
        let cantidadProductoCarne = parseInt(prompt("ingrese que cantidad de hamburguesas de " + entrada + " desea comprar:"))
        calculoStock (cantidadProductoCarne, productoA.stock, productoA.precio )
        productoA.stock -= cantidadProductoCarne
        }
    else if (entrada.toUpperCase() == 'POLLO' ) {
        let cantidadProductoPollo = parseInt(prompt("ingrese que cantidad de hamburguesas de " + entrada + " desea comprar:"))
        calculoStock (cantidadProductoPollo, productoB.stock, productoB.precio )             
            }
    else if (entrada.toUpperCase() == 'LENTEJA' ) {
        let cantidadProductoLenteja = parseInt(prompt("ingrese que cantidad de hamburguesas de " + entrada + " desea comprar:"))
        calculoStock (cantidadProductoLenteja, productoC.stock, productoC.precio )       
            } 
    else {
            alert("Por favor elija el producto correspondiente");
        }}




if(precioTotal != 0){         
alert("El precio total es: " + precioTotal)
}
else{
alert("Gracias por su visita!")
}

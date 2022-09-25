/*productos*/
let nombreProductoA = 'Carne'
let nombreProductoB = 'Pollo'
let nombrePrductoC = 'Vegetariana'

let precioProducto = 600

let complementoProductoA = 'lechuga'
let complementoProductoB = 'tomate'
let complementoProductoC = 'pepino'
let complementoProductoD = 'cebolla'
let complementoProductoE = 'morron'
let complementoProductoF = 'chedar'
let complementoProductoG = 'huevo frito'
let complementoProductoH = 'jamon'
let complementoProductoI = 'panceta'


function complemento (){
let complementoElegido = prompt ("Cómo desea complementar su hamburguesa de " + entrada + "\n - lechuga\n - tomate\n - pepino\n - cebolla\n - morron\n - chedar\n - huevo frito\n - jamon\n - panceta\n - ESC-Salir" ) ;  
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

            alert ("Gracias lo esperamos");
        }
    
    }



let entrada = prompt ("Cómo desea armar su Hamburguesa\n - Carne\n - Lenteja\n - Pollo\n - ESC-Salir") ;
while (entrada != "ESC") {
    if(entrada.toUpperCase() == 'CARNE'){
        complemento () ;       
                alert ("que Desea seguir eligiendo")
            }
    else if (entrada.toUpperCase() == 'POLLO' ) {
        complemento () ;       
        
            }
    else if (entrada.toUpperCase() == 'LENTEJA' ) {
        complemento () ;       
            } }


var inicio;


let body = document.querySelector("#body"); // cambiar atributos HTML / CSS
var style_body = window.getComputedStyle(body); // obtener atributos CSS 
var rutaImagenFondoOriginal = style_body.getPropertyValue("background-image");

// hacer dos botones uno paraguardar y otro para recuperar, usando web storage para que guarde como van las cajas

function cambiarClientes(tipo_accion,numeroCaja) {

    // 1 varaibles 2 condiciones etc

    let input_caja;
    let divcaja;
    let stylecaja;
    let mensajes;

    if (numeroCaja == "caja1") {

        let input_caja1 = document.getElementById("CAJA1");  
        input_caja = input_caja1;
        

        let divcaja1 = document.querySelector("#divcaja1"); // cambiar atributos HTML / CSS
        divcaja = divcaja1;
        var style_divcaja1 = window.getComputedStyle(divcaja1); // obtener atributos CSS 
        stylecaja = style_divcaja1;

        mensajes = document.getElementById('mensaje1');

        

    } else if (numeroCaja == "caja2") {    

        let input_caja2 = document.getElementById("CAJA2");
        input_caja = input_caja2;

        let divcaja2 = document.querySelector("#divcaja2");
        divcaja = divcaja2;
        var style_divcaja2 = window.getComputedStyle(divcaja2);
        stylecaja = style_divcaja2;
        
        let div_mensaje = document.getElementById('mensaje2');
        mensajes = div_mensaje;
        
        

    } else if (numeroCaja == "caja3") {    

        let input_caja3 = document.getElementById("CAJA3");
        input_caja = input_caja3;

        let divcaja3 = document.querySelector("#divcaja3");
        divcaja = divcaja3;
        var style_divcaja3 = window.getComputedStyle(divcaja3);
        stylecaja = style_divcaja3;

        let div_mensaje = document.getElementById('mensaje3');
        mensajes = div_mensaje;

    } else if (numeroCaja == "caja4") {    

        let input_caja4 = document.getElementById("CAJA4");
        input_caja = input_caja4;

        let divcaja4 = document.querySelector("#divcaja4");
        divcaja = divcaja4;
        var style_divcaja4 = window.getComputedStyle(divcaja4);
        stylecaja = style_divcaja4;

        let div_mensaje = document.getElementById('mensaje4');
        mensajes = div_mensaje;

    }
         
    // esto aumentaría en uno el valor del input de caja1:
    let total_clientes_caja = parseInt(input_caja.value);

    
    // consultando un VALOR CSS de un etiqueta:
    console.log("|" + stylecaja.getPropertyValue("background") + "|");

    /*
rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(34, 193, 195) 0%, rgb(94, 253, 45) 100%) repeat scroll 0% 0% / auto padding-box border-box

    */

    // vamos a comprobar si el background de la caja está en verde

    if (stylecaja.getPropertyValue("background") == "rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(34, 193, 195) 0%, rgb(94, 253, 45) 100%) repeat scroll 0% 0% / auto padding-box border-box") {
        inicio = new Date();
    
        //console.log("el elemento ya estaba en verde!");
        //console.log("vamos a poner el elemento en verde!");
        //divcaja.style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(94,253,45,1) 100%)";

        // dependiendo de lo que pasemos en la variable "tipo_accion", sumará o restará:
        if (tipo_accion == "poner") {
            total_clientes_caja = total_clientes_caja + 1;
            let mensaje_caja = mensajes;
            console.log("holaaa" + mensaje_caja);
            mensaje_caja.innerHTML = "<br>En la caja hay " + total_clientes_caja + " cliente";

            
        } else if (tipo_accion == "quitar") {
            total_clientes_caja = total_clientes_caja - 1;
            let mensaje_caja = mensajes;
            mensaje_caja.innerHTML = "<br>En la caja hay " + total_clientes_caja + " cliente";

          
            
            if (total_clientes_caja <= 0) {
                total_clientes_caja = 0;
                divcaja.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
                mensaje_caja.innerHTML = "<br>Caja cerrada";
            } 
            
            
        } else {
            alert("has introducido mal el tipo de acción!");
        }

        input_caja.value = total_clientes_caja;

    } else {

        // cambiando un VALOR CSS de una etiqueta:
        if (total_clientes_caja != 0 || tipo_accion == 'poner') {
            console.log("vamos a poner el elemento en verde!");
            divcaja.style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(94,253,45,1) 100%)";
            let mensaje_caja = mensajes;
            mensaje_caja.innerHTML = "<br>Caja abierta";

            
        }

        // para añadir una clase nueva tenemos esto:
        //divcaja1.setAttribute("class", "caja cajadisponible");

    }
        console.log(total_clientes_caja);


   

    if (total_clientes_caja == 4) {
        alert("La caja esta saturada.");
        let fin = new Date();
        let tiempoTranscurrido = (fin-inicio)/1000; //en milisegundos
        alert('tiempo transcurrido:' + tiempoTranscurrido);
    }

   
}

document.getElementById("divcaja1").oncontextmenu = function() { 

    cambiarClientes('quitar', 'caja1'); 

};

document.getElementById("divcaja2").oncontextmenu = function() { 

    cambiarClientes('quitar', 'caja2'); 

};

document.getElementById("divcaja3").oncontextmenu = function() { 

    cambiarClientes('quitar', 'caja3'); 

};

document.getElementById("divcaja4").oncontextmenu = function() { 

    cambiarClientes('quitar', 'caja4'); 

};

function escribirComando() {

    // ¿cómo obtener el texto escrito en el input "comando"?
    
    let comando = document.getElementById("comando"); 

    let accion = comando.value; 

    console.log(accion);
     
    /*

    caja     cuando encuentra la palabra caja da true

    a?        0 o 1 veces
    a+        1 o infinitas veces
    a*        0 o infinitas veces

    a{1,4}    como mínimo 1 vez, como máximo 4 veces
    a{1,}     como mínimo 1 vez, como máximo infinitas veces 
    a{1}      obligatoriamente, 1 vez

    (1|4|5)    un uno o un 4 o un 5

    [a-Z]      alguna letra entre la a y la z
    [0-9]      algún número entre 0 y 9

    */

    // Caja 1: +1
    // Caja 2: 1, 
    // Caja 3: -2

    var expresion_regular = new RegExp('Caja ?[1-4]: (\\+|-|)[1-2]');    // Caja [1-4]{:} 

    // vamos a comprobar si está bien escrito el contenido de la variable "número"

    if (expresion_regular.test(accion) == true)  {

        console.log("está bien escrito");

        // limpiamos la cadena

        let accion_limpia = accion.replace('Caja ', '');
        accion_limpia = accion.replace('Caja', '');

        // extraemos el númreo de la caja y el número de clientes que vienen:
        let numero_caja = accion_limpia[1];
        let numero_clientes = accion_limpia[ accion_limpia.length - 1 ];
        let numero_signo = accion_limpia[ accion_limpia.length - 2 ];

        console.log("numero_caja:" + numero_caja);
        console.log("numero_clientes:" + numero_clientes);
        console.log("numero_signo:" + numero_signo);

        if (numero_signo == "+") {   

            for (let conta = 0; conta < numero_clientes; conta++) {

                cambiarClientes('poner', 'caja' + numero_caja);

            }

        } else {

            for (let conta = 0; conta < numero_clientes; conta++) {

                cambiarClientes('quitar', 'caja' + numero_caja);

            }    

        }
        

    } else  {

        console.log("está mal escrito");

    }



}





//FUNCIONALIDAD BOTON DIA Y NOCHE



  function ponerOscuro(){

    
    var style_body = window.getComputedStyle(body); // obtener atributos CSS 
    
    console.log(style_body.getPropertyValue("background-image"));

      
    if(style_body.getPropertyValue("background-image") == rutaImagenFondoOriginal){

        
        body.style.backgroundImage='url(noche.jpg)';

    } else {

        body.style.backgroundImage = 'url(16618.jpg)';

    }  

  }

  // BOTON BORRAR FONDO
    function borrarFondo() {
        
        let body = document.getElementById('body'); // cambiar atributos HTML / CSS
        
        var style_body = window.getComputedStyle(body); // obtener atributos CSS 
        
        console.log(style_body.getPropertyValue("background-image"));
        console.log(body.style.backgroundImage);
        
        // comprobamos si la imagen original está activa / mostrándose todavía:
        if(style_body.getPropertyValue("background-image") == rutaImagenFondoOriginal){

            body.style.backgroundImage='url()';

        } else {

            body.style.backgroundImage = 'url(16618.jpg)';
        }  
        
                   
    }

//con esto desactivamos el menu desplegable cuando usamos el boton derecho .
/*window.oncontextmenu = function () {
    return false;
}
*/






  

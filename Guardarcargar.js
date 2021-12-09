

class Guardarcargar{

    constructor() {

        
    }
      
    guardarDatos() {

        let datos_caja1 = document.getElementById("CAJA1");  
        let datos_caja2 = document.getElementById("CAJA2");  
        let datos_caja3 = document.getElementById("CAJA3");
        let datos_caja4 = document.getElementById("CAJA4");
    
        //let cajasId = [datos_caja1.id, datos_caja2.id, datos_caja3, datos_caja4];
        
        let cajaValue1 = datos_caja1.value;  
        let cajaValue2 = datos_caja2.value;
        let cajaValue3 = datos_caja3.value;
        let cajaValue4 = datos_caja4.value;
    
        let cajasValue_json = {"caja1" : cajaValue1, "caja2" : cajaValue2, "caja3" : cajaValue3, "caja4" : cajaValue4};
    
        let cajasValue_str = JSON.stringify(cajasValue_json);
    
        localStorage.setItem("cajas", cajasValue_str);
    
       /*  for (let i = 0; i < cajasValue.length; i++) {
    
            console.log("adios" + cajasId[i]);
            //window.localStorage.setItem(cajasId[i], cajasValue[i]);
            console.log("hola" + cajasValue[i] );
            localStorage.setItem(cajasId[i], JSON.stringify(cajasValue[i]));
    
            console.log(localStorage);
        } */
    
    }
    
    cargarMercado() {
        
    
        console.log("pasa por 1");
    
        let cajasValue_str = localStorage.getItem("cajas");
        let cajasValue_json = JSON.parse(cajasValue_str);
        
        console.log( cajasValue_json.caja1 );
        console.log( cajasValue_json["caja1"] );
    
        let contador = 1;
    
        for (let key in cajasValue_json) {
    
            let value = cajasValue_json[key];
    
            console.log("mostramos el atributo con la clave " + key);
            console.log(value);
    
            let divcaja = document.getElementById("divcaja" + contador); // cambiar atributos HTML / CSS
            divcaja.style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(94,253,45,1) 100%)";
    
            let div_mensaje = document.getElementById(`mensaje` + contador);
            div_mensaje.innerHTML = "<br>En la caja hay " + value + " cliente";
    
            let datos_caja = document.getElementById("CAJA" + contador);  
            datos_caja.value = value;
    
            if (cajasValue_json[key] <= 0) {
                //total_clientes_caja = 0;
                divcaja.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
                div_mensaje.innerHTML = "<br>Caja cerrada";
            } 
    
            contador++;
        }
    
    }

} 



let guardarCargar = new Guardarcargar();




// Pasteleria, vende tartas por peso, el cliente pone cantidad de comensales, sabor seleccionado, da como resultados valores a pagar y costo de envio calculuado por cantidad de alimento comprado.
// variables globales
const chocolate = 3
const fresa = 3.5
const vainilla = 4
const importe = 0
let cantidad; 
let saborTarta ="";
let resultado;

//operacion multiplicar
function multiplicar(valor1, valor2){
    return valor1 * valor2;
}
function sumar(precioTarta, precioEnvio){
    return precioTarta + precioEnvio;
}
//paso 1: que nos diga por prompt la cantidad de comensales, teniendo en cuenta que 0 cierra el ciclo.
//paso 2: elegir el sabor chocolate, fresa o vainilla.

while (cantidad != 0){
    cantidad = parseInt(prompt("Ingresar cantidad de comensales (mínimo 1)"));
    
    if (cantidad === 0){
        break;
    }
while (saborTarta === ""){
    saborTarta = prompt("Ingrese el sabor que desee:\n\ -chocolate \n\ -fresa \n\ -vainilla");
    switch (saborTarta.toLowerCase()){
        case "chocolate":
            resultado = multiplicar(chocolate, cantidad);
            alert("El coste total de su tarta de chocolate es de "+ resultado + "€.");
            break;
        case "fresa":
            resultado = multiplicar(fresa, cantidad);
            alert("El coste total de su tarta de fresa es de "+ resultado + "€.");
            break;
        case "vainilla":
            resultado = multiplicar(vainilla, cantidad);
            alert("El coste total de su tarta de vainilla es de "+ resultado + "€.");
            break;
        default:
            alert("Opción no disponible, por favor, asegurese que ha escrito una opción valida");
            saborTarta="";
            break;
    }
    }

        if (cantidad >= 20 ){
            valorEnvio = 0
            alert("¡Felicidades, el Envío te sale gratis! ^^");
        }
        else if (cantidad >=6 ){
            valorEnvio = 6
            alert("Tu envío te costará "+ valorEnvio + "€.");
        }
        else {
            valorEnvio = 3
            alert("Tu envío te costará "+ valorEnvio + "€.");
        }
        alert ("El coste total es "+ sumar(resultado, valorEnvio) + "€.");
    }1
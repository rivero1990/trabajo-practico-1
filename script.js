const selectCantProductos = document.querySelector("#select-1");
const selectCantPermitida = document.querySelector("#select-2");
const selectColores = document.querySelector("#select-3");
const detallesCompra = document.querySelector("#contenedor-informacion-compra");
const compraRealizada = document.querySelector("#contenedor-carrito-compra");


const ELECCION_CANT_PRODUC = "Cantidad de productos";
const ELECCION_CANT_PERMIT = "Cantidad de productos permitida por compra";
const ELECCION_COLORES = "Colores seleccionados";


const IMAGEN_1 = "https://th.bing.com/th/id/OIP.5R_pPNaXk_FpXouLC5PiEgHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_2 ="https://th.bing.com/th/id/OIP.2q2vcwB5EZxTNNPv7cjJJQHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_3 ="https://biolieve.net/wp-content/uploads/2017/06/agua-kefir-higo-limon-300x300.png";
const IMAGEN_4 ="https://th.bing.com/th/id/OIP.7QBHzLj30tQrvkggmsu_6QHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_5 ="https://th.bing.com/th/id/OIP.bljCk18c-C2d_zzalpn9cAHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_6 ="https://th.bing.com/th/id/OIP.U0S7WotgXEcH5jcGsqhrQAHaLH?w=141&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_7 ="https://th.bing.com/th/id/OIP.4mcN6r_vuva_AconAFJRTgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_8 ="https://th.bing.com/th/id/OIP.V7erebbgETw1uU8CnLtDXwHaHa?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_9 ="https://th.bing.com/th/id/OIP.dNWaYXxxEfY957YxHm6zXQHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_10 = "https://th.bing.com/th/id/OIP.b-v_FCsz2LptlfE0KiOdjwHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

const NOMBRE_PROD_1 = "Yogurt Vegano";
const NOMBRE_PROD_2 = "Queso de almendras";
const NOMBRE_PROD_3 = "Kefir de agua";
const NOMBRE_PROD_4 = "Tofu";
const NOMBRE_PROD_5 = "Hummus";
const NOMBRE_PROD_6 = "Pan Integral";
const NOMBRE_PROD_7 = "Galletas de arroz";
const NOMBRE_PROD_8 = "Jugo de Naranja";
const NOMBRE_PROD_9 = "Crema de mani";
const NOMBRE_PROD_10 = "Huevos Organicos";


function confirmaInfoCompra() {

    detallesCompra.innerHTML = "";
    
    const eleccionesCompra =  [
        `${ELECCION_CANT_PRODUC}: ${selectCantProductos.value}`,
        `${ELECCION_CANT_PERMIT}: ${selectCantPermitida.value}`,
        `${ELECCION_COLORES}: ${selectColores.value}`
      ];
    
      for (let i = 0; i < eleccionesCompra.length; i++) {
        detallesCompra.innerHTML += `<ul>${eleccionesCompra[i]}</ul>`;
      }

    detallesCompra.style.border = "3px groove rgb(1, 1, 21)";
    detallesCompra.style.marginTop = "20px";
    detallesCompra.style.backgroundColor = "greenyellow";
    detallesCompra.style.textAlign = "justify";
}

    










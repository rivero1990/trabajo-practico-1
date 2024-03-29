const selectCantProductos = document.querySelector("#select-1");
const selectCantPermitida = document.querySelector("#select-2");
const selectColores = document.querySelector("#select-3");
const detallesCompra = document.querySelector("#contenedor-informacion-compra");
const compraRealizada = document.querySelector("#contenedor-carrito-compra");


const ELECCION_CANT_PRODUC = "Cantidad de productos";
const ELECCION_CANT_PERMIT = "Cantidad de productos permitida por compra";
const ELECCION_COLORES = "Colores seleccionados";


const IMAGEN_1 = "https://th.bing.com/th/id/OIP.MEN6rI9xH5OaSRv585rDQgHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_2 = "https://th.bing.com/th/id/OIP.HslV9rmsVL4IKIHI0NejvQHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_3 = "https://biolieve.net/wp-content/uploads/2017/06/agua-kefir-higo-limon-300x300.png";
const IMAGEN_4 = "https://th.bing.com/th/id/OIP.7QBHzLj30tQrvkggmsu_6QHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_5 = "https://th.bing.com/th/id/OIP.bljCk18c-C2d_zzalpn9cAHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_6 = "https://th.bing.com/th/id/OIP.U0S7WotgXEcH5jcGsqhrQAHaLH?w=141&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_7 = "https://th.bing.com/th/id/OIP.4mcN6r_vuva_AconAFJRTgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_8 = "https://th.bing.com/th/id/OIP.V7erebbgETw1uU8CnLtDXwHaHa?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_9 = "https://th.bing.com/th/id/OIP.dNWaYXxxEfY957YxHm6zXQHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_10 = "https://th.bing.com/th/id/OIP.b-v_FCsz2LptlfE0KiOdjwHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

const NOMBRE_1 = "Yogurt Vegano";
const NOMBRE_2 = "Queso de almendras";
const NOMBRE_3 = "Kefir de agua";
const NOMBRE_4 = "Tofu";
const NOMBRE_5 = "Hummus";
const NOMBRE_6 = "Pan Integral";
const NOMBRE_7 = "Galletas de arroz";
const NOMBRE_8 = "Jugo de Naranja";
const NOMBRE_9 = "Crema de mani";
const NOMBRE_10 = "Huevos Organicos";

const nombres = [NOMBRE_1, NOMBRE_2, NOMBRE_3, NOMBRE_4, NOMBRE_5, NOMBRE_6, NOMBRE_7, NOMBRE_8, NOMBRE_9, NOMBRE_10];
const imagenes = [IMAGEN_1, IMAGEN_2, IMAGEN_3, IMAGEN_4, IMAGEN_5, IMAGEN_6, IMAGEN_7, IMAGEN_8, IMAGEN_9, IMAGEN_10];

// Array con la conversion de los colores
const conversionColores = {
  "Ninguno": "None",
  "Amarillo-Rosa": "Gold-Hotpink",
  "Gris-Verde": "Gray-Darkolivegreen",
  "Marron-Celeste": "Sienna-Skyblue"
};


function muestraInfoCompra() {

  detallesCompra.innerHTML = "";

  /* Array de opciones seleccionadas por el usuario */
  const eleccionesCompra = [
    `${ELECCION_CANT_PRODUC}: ${selectCantProductos.value}`,
    `${ELECCION_CANT_PERMIT}: ${selectCantPermitida.value}`,
    `${ELECCION_COLORES}: ${selectColores.value}`
  ];

  for (let i = 0; i < eleccionesCompra.length; i++) {
    detallesCompra.innerHTML += `<ul>${eleccionesCompra[i]}</ul>`;
  }

  /* Agrega las funciones de css solo cuando se da click al boton */
  detallesCompra.style.border = "3px groove rgb(1, 1, 21)";
  detallesCompra.style.marginTop = "20px";
  detallesCompra.style.backgroundColor = "greenyellow";
  detallesCompra.style.textAlign = "justify";

  mostrarProductosCarrito()
  cambiarColoresCarrito()
  agregarMetodoPago()
  agregarCantidadPermitida()
  agregarBotonCompra()
}

function mostrarProductosCarrito() {

  let cantidadProductos = parseInt(selectCantProductos.value);

  compraRealizada.innerHTML = "";

  for (let i = 0; i < cantidadProductos; i++) {
    // Crea un contenedor para cada producto
    const contenedorProductos = document.createElement("div");
    contenedorProductos.classList.add("productos");

    // Crea el nombre de cada uno de los productos
    const nombresProductos = document.createElement("h4");
    nombresProductos.textContent = nombres[i];

    // Crea la imagen de cada uno de los productos
    const imgProductos = document.createElement("img");
    imgProductos.src = imagenes[i];


    // Agrega los nombres y las imagenes a cada contenedor de los productos
    contenedorProductos.appendChild(nombresProductos);
    contenedorProductos.appendChild(imgProductos);

    // Agrega el contenedor de los productos al contenedor de la compra realizada
    compraRealizada.appendChild(contenedorProductos);
  }
}

function cambiarColoresCarrito() {

  const opcionesColores = selectColores.value;

  // Obtiene la conversion de los colores
  const coloresRecibidos = conversionColores[opcionesColores].split("-");

  /* Se seleccionan todos los contenedores de productos */
  const aplicarColores = document.querySelectorAll(".productos");

  for (let i = 0; i < aplicarColores.length; i++) {
    const colores = coloresRecibidos[i % coloresRecibidos.length];
    aplicarColores[i].style.backgroundColor = colores ;
  }
}

function agregarMetodoPago() {
  /* Se seleccionan todos los contenedores de productos */
  const aplicarMetPago = document.querySelectorAll(".productos");

  for (let i = 0; i < aplicarMetPago.length; i++) {
    const contenedorMetodoPago = document.createElement("div");
    contenedorMetodoPago.classList.add("metodo-pago");

    const labelMetodoPago = document.createElement("label");
    labelMetodoPago.textContent = "Seleccione metodo de pago";

    const selectMetodoPago = document.createElement("select");
    selectMetodoPago.innerHTML = `
      <option value="efec">Efectivo</option>
      <option value="debi">Debito</option>
      <option value="cred">Credito</option>
    `;

    contenedorMetodoPago.appendChild(labelMetodoPago);
    contenedorMetodoPago.appendChild(selectMetodoPago);
    aplicarMetPago[i].appendChild(contenedorMetodoPago);
  }
}

function agregarCantidadPermitida() {

  const aplicarCantPermitida = document.querySelectorAll(".productos");

  for (let i = 0; i < aplicarCantPermitida.length; i++) {
    const contenedoresCantidades = document.createElement("div");
    contenedoresCantidades.classList.add("cantidades-permitidas");

    const labelCantidades = document.createElement("label");
    labelCantidades.textContent = "Seleccione cantidad";

    const selectCantidades = document.createElement("select");

    const cantRecibidas = parseInt(selectCantPermitida.value);
    for (let i = 0; i < cantRecibidas; i++) {
      const opcionesCantidades = document.createElement("option");
      opcionesCantidades.value = i + 1;
      opcionesCantidades.textContent = i + 1;
      selectCantidades.appendChild(opcionesCantidades);
    }

    contenedoresCantidades.appendChild(labelCantidades);
    contenedoresCantidades.appendChild(selectCantidades);
    aplicarCantPermitida[i].appendChild(contenedoresCantidades);
  }
}

function agregarBotonCompra() {
  
  const aplicarBtnCompra = document.querySelectorAll(".productos");

  for (let i = 0; i < aplicarBtnCompra.length; i++) {
    const botonCompra = document.createElement("button");
    botonCompra.textContent = "Comprar";
    botonCompra.classList.add("boton-compra");

    aplicarBtnCompra[i].appendChild(botonCompra);
  }
}


































//Declaro carrito
let carrito = [];

//Uso de DOM
const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");

//Activar funcion procesar pedido 
if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
carrito = JSON.parse(localStorage.getItem("carrito")) || [];
mostrarCarrito();
if (activarFuncion) {
  document.querySelector("#activarFuncion").click(procesarPedido);
}
});

//Vaciar carrito
if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

//Agregar producto
const agregarProducto = (id) => {
  //Verifico que si ya hay algun producto
  const existe = carrito.some(prod => prod.id === id)
  if(existe){                         
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()
};

//Funcion guardar local storage
function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Funcion eliminiar producto
function eliminarProducto(id) {
  const prodId = id;
  carrito = carrito.filter((produc) => produc.id !== prodId);
  mostrarCarrito();
}

//Funcion procesar pedido
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

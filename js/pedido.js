const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});       //-->Se ejecuta cuando se presionar agregar carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});  //-->Al vaciar carrito
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());    //-->Al cargar documento se muestra lo almacenado en LS
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});//-->Enviar pedido a otra pagina
}
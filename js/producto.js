//Procesar compra desde el carrito
if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      //Verifico que hay algun producto en mi carrito
      if (carrito.length === 0) {
        swal({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        location.href = "../../compra.html";
      }
    });
  }


//Funcion mostrar carrito de compras
const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    if (modalBody) {
      modalBody.innerHTML = "";
      carrito.forEach((prod) => {
        const { id, nombre, precio, desc, img, cantidad } = prod;
        console.log(modalBody);
        modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
            <img class="img-fluid img-carrito" src="../../${img}"/>
          </div>
          <div>
            <p>Producto: ${nombre}</p>
            <p>Precio: ${precio}</p>
            <p>Cantidad :${cantidad}</p>
            <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
          </div>
        </div>
        `;
      });
    }
    //Verifico que hay algun producto en el carrito
    if (carrito.length === 0) {
      console.log("No hay producto");
      modalBody.innerHTML = `
      <p class="text-center text-secondary parrafo">No hay ningun producto en tu carrito</p>
      `;
    } else {
      console.log("Se ingresaron correctamente los productos");
    }
    carritoContenedor.textContent = carrito.length;
    //Calculo el precio total
    if (precioTotal) {
      precioTotal.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
      );
    }
    guardarStorage();
  };
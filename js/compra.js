const formulario = document.querySelector('#procesar-pago');

//Enviar compra
if(formulario){
    formulario.addEventListener('submit', enviarCompra)
  }
//Funcion enviar compra
function enviarCompra(e){
    e.preventDefault()
    const cliente = document.querySelector('#cliente').value
    const email = document.querySelector('#correo').value
   //Verifico el ingreso de datos
    if(email === '' || cliente == ''){
      swal({
        title: "Error!",
        text: "Ingrese su nombre y el correo, por favor",
        icon: "warning",
      });
    } else {
        setTimeout(()=>{
            swal({
              title: "Compra exitosa",
              text: "Gracias por su compra!",
              icon: "success",
            });
        setTimeout (()=>{
          localStorage.clear();
          formulario.reset();
          window.location = "index.html";
          },2000)
        },1000)
        
    }
  }
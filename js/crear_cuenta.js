
const formulario1 = document.querySelector("#formulario1");

//crear el evento
formulario1.addEventListener("submit", validarFormulario)

//mis funciones 
function validarFormulario(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value;
    const mail = document.querySelector("#mail").value;

    let usuario = {
        nombre: nombre,
        apellido: apellido,
        mail: mail,
    };
    //paso mis resultados a string
    localStorage.setItem("usuario", JSON.stringify(usuario))
      setTimeout(()=>{
        swal({
            title: "Registro Completado",
            text: "Gracias por confiar en nosotros!",
            icon: "success",
        });
        setTimeout (()=>{
        window.location = "index.html";
        },3000)
        },2000)
}


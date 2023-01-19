
const formulario2 = document.querySelector("#formulario2");

//crear el evento
formulario2.addEventListener("submit", validarFormulario2)

//mis funciones 
function validarFormulario2(e) {
    e.preventDefault();
    const dni = document.querySelector("#dni").value;
    const telefono = document.querySelector("#telefono").value;
    const ocupacion = document.querySelector("#ocupacion").value;

    let verificacion = {
        dni: dni,
        telefono: telefono,
        ocupacion: ocupacion,
    };
    //paso mis resultados a string
    localStorage.setItem("verificacion", JSON.stringify(verificacion))

      setTimeout(()=>{
        swal({
            title: "Verificacion completada",
            text: "Gracias por confiar en nosotros!",
            icon: "success",
        });
        setTimeout (()=>{
        window.location = "index.html";
        },3000)
        },2000)
}




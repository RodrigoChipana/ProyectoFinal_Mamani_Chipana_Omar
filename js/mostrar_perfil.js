
//Mostrar los datos del usuario
mostrar_perfil();
function mostrar_perfil(){
    let persona = JSON.parse(localStorage.getItem("usuario")); 
    let verificacion_persona = JSON.parse(localStorage.getItem("verificacion")); 

    const nombre = document.getElementById("user_nombre");
    nombre.textContent = `Nombre: ${persona.nombre}`

    const apellido = document.getElementById("user_apellido");
    apellido.textContent = `Apellido: ${persona.apellido}`

    const mail = document.getElementById("user_mail");
    mail.textContent = `Email: ${persona.mail}`

    const dni = document.getElementById("user_dni");
    dni.textContent = `DNI: ${verificacion_persona.dni}`

    console.log(persona.nombre)

    const telefono = document.getElementById("user_telefono");
    telefono.textContent = `Telefono: ${verificacion_persona.telefono}`

    const ocupacion = document.getElementById("user_ocupacion");
    ocupacion.textContent = `Ocupacion: ${verificacion_persona.ocupacion}`

    
}


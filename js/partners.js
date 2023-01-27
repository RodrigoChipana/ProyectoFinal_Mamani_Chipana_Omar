//seleccionamos el id list
const lista = document.querySelector('#list')

//Implementamos async, await y fetch para recuperar datos del proyecto
 const obtenerMarcas = async () => {
    const resp = await
    fetch('./js/partners.json')
    const data = await resp.json()
   
    data.forEach((marca) => {
    const li = document.createElement('li')
    li.innerHTML = `
    <h4>${marca.name}</h4>
    <img src= '${marca.image}' class="iconoP"></img>
    `
    lista.append(li)
    })
   }

   obtenerMarcas()

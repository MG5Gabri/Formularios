let root = document.querySelector("#root");

//comentario
let div = document.createElement("div");
div.className = "divFormularios";

//lista de textos
let formularios = [
    {nombre:"Login", link:"../componetes/login/login.html"},
    {nombre:"Contacto", link:"../componentes/fomularioDeContacto/deContacto.html"},
    {nombre:"Registro", link:"../componentes/deRegistro/registro.html"},
    {nombre:"Busqueda", link:"../componentes/deBusqueda/busqueda.html"},
    {nombre:"Pedido de Compras", link:"../componentes/pedidosDeCompras/compras.html"},
    {nombre:"Comentarios y Reseñas", link:"../componentes/comentariosYReseñas/comentariosReseñas.html"}
];

//forEach
formularios.forEach(itemLista =>{
    //Creamos un div que se llame item
    let divitem = document.createElement("a")
    divitem.className = "item";
    divitem.href = itemLista.link;
    divitem.innerText = itemLista.nombre;

    div.appendChild(divitem)
});


//comentario
root.appendChild(div)
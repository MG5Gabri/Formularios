let root = document.querySelector("#root");

//comentario
let div = document.createElement("div");
div.className = "divFormularios";

//lista de textos
let formularios = [
    {nombre:"Login", link:"componetes/login/login.html"},
    {nombre:"De Contacto", link:"componentes/fomularioDeContacto/deContacto.html"},
    {nombre:"Login", link:"https:"},
    {nombre:"Login", link:"https:"},
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
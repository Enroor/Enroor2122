const listaCompra = ["pan", "huevo", "leche", "fruta", "agua", "carne", "pescado"];
listaCompra.push("Aceite de Girasol");
listaCompra.splice(7, 1);

const listaObj = [
    {titulo: "Origen", director: 'Christopher Nolan', fecha: "2010"},
    {titulo: "Origen", director: 'Christopher Nolan', fecha: "2000"},
    {titulo: "Origen", director: 'Christopher Nolan', fecha: "2015"}
];

const fecha = listaObj.filter(valor => valor.fecha > 2010);
const directores = listaObj.map((valor) => valor.director);
const titulos = listaObj.map((valor) => valor.titulo);
const newList = directores.concat(titulos);
const newListProp = [...directores,...titulos];

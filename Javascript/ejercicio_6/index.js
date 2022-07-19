const listaCompra = ["pan", "huevo", "leche", "fruta", "agua", "carne", "pescado"];
listaCompra.push("Aceite de Girasol");
listaCompra.splice(7, 1);

const listaObj = [
    {titulo: "Origen", director: 'Christopher Nolan', fecha: new Date(2010, 0, 1)},
    {titulo: "Origen", director: 'Christopher Nolan', fecha: new Date(2000, 6, 11)},
    {titulo: "Origen", director: 'Christopher Nolan', fecha: new Date(2015, 5, 25)}
];

const fecha = listaObj.filter(valor => valor.fecha > new Date(2010, 0, 1));
const directores = listaObj.map((valor) => valor.director);
const titulos = listaObj.map((valor) => valor.titulo);
const newList = directores.concat(titulos);
const newListProp = [...directores, ...titulos];

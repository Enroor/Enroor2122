const fecha = new Date();
const fechaNac = new Date(1994, 5, 8);

let comparar = fecha.getTime() > fechaNac.getTime();
let diaNac = fechaNac.getDay();
let mesNac = fechaNac.getMonth() + 1;
let anyoNac = fechaNac.getFullYear();

console.log(anyoNac);
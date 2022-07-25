const nombre = "Quique";
const apellido = "Rodríguez";

const obj = {
    nombre,
    apellido
}

//sessionStorage.setItem("datos",JSON.stringify(obj));
//localStorage.setItem("datos",JSON.stringify(obj));

const fecha = new Date();
//document.cookie = "cookieCad="+JSON.stringify(obj)+"; expires=" + new Date(fecha.getTime() + 2 * 60000)
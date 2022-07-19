const obj = {
    nombre: "Enrique",
    apellido: "Rodríguez",
    edad: 28,
    altura: 1.73,
    eresDesarrollador: true
}

const miEdad = obj.edad;
const miLista = [
    {...obj},{
        nombre: "Álvaro",
        apellido: "Díaz",
        edad: 27,
        altura: 1.80,
        eresDesarrollador: false
    },{
        nombre: "Juan Carlos",
        apellido: "Martín",
        edad: 31,
        altura: 1.78,
        eresDesarrollador: false
    }
]

const newList = miLista.sort((a, b) => b.edad - a.edad);
console.log(newList);
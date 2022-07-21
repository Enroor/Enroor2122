class Estudiante{
    nombre;
    asignaturas = ["Javascript", "HTML", "CSS"]
    constructor(nombre){
        this.nombre = nombre;
        this.asignaturas;
    }

    getDatos(){
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const newStudent = new Estudiante("Juan");
newStudent.getDatos();

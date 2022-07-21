class Estudiante{
    nombre;
    
    constructor(nombre){
        this.nombre = nombre;
    }

    getDatos(){
        return this.nombre;
    }
}

const newStudent = new Estudiante("Juan");
newStudent.getDatos();
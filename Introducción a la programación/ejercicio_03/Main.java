public class Main {
    public static void main(String[] args) {
        System.out.println("Suma total de 3 parámetros: " + sumar(3, 2, 5));

        Coche miCoche = new Coche();
        miCoche.inc_puertas();
        System.out.println("Número de puertas del coche: " + miCoche.puertas);
    }
    public static int sumar(int a, int b, int c){
        return a + b + c;
    }
}

class Coche{
    public int puertas;

    public void inc_puertas(){
         this.puertas++;
    }
}

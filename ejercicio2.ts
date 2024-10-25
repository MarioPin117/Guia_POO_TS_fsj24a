class Calculadora {
    // Método para sumar dos números
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar dos números
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir dos números
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }

    // Método para calcular la potencia (a^b)
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Método para calcular el factorial de un número
    factorial(n: number): number {
        if (n < 0) {
            throw new Error("No se puede calcular el factorial de un número negativo.");
        } else if (n === 0 || n === 1) {
            return 1;
        } else {
            let resultado = 1;
            for (let i = 2; i <= n; i++) {
                resultado *= i;
            }
            return resultado;
        }
    }
}

// Ejemplo de uso:
const calculadora = new Calculadora();

console.log("Suma: " + calculadora.sumar(5, 3));
console.log("Resta: " + calculadora.restar(5, 3)); 
console.log("Multiplicación: " + calculadora.multiplicar(5, 3)); 
console.log("División: " + calculadora.dividir(10, 2));
console.log("Potencia: " + calculadora.potencia(2, 3));
console.log("Factorial: " + calculadora.factorial(5)); 

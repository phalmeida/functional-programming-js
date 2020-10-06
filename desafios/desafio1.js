const somar = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(somar(2)(3)(4));

const multiplicar = function (num1, num2) {
    return num1 * num2;
}

const calcular = function (x) {
    return function (y) {
        return function (func) {
            return func(x, y);
        }
    }
}

console.log(calcular(2)(3)(multiplicar));
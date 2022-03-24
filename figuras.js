// Código del cuadrado
console.group("Cuadrados");
//  const ladoCuadrado = 5;
//  console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

perimetroCuadrado()
//  console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("el área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triangulo
console.group("Triangulos");

//  const ladoTriangulo1 = 6;
//  const ladoTriangulo2 = 6;
//  const baseTriangulo = 4;
//  const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Código del circulo
console.group("Circulos");

// Radio
//const radioCirculo = 4;

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio){
    return (radio * radio) * PI;

} 

console.groupEnd();

// Aquí interactuamos con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularArea(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularArea(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
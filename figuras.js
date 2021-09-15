// Codigo del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
  return lado * 4
}

function areaCuadrado(lado) {
  return lado * lado
}
console.groupEnd()

// Codigo del triangulo
console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
} 

function areaTriangulo(base, altura) {
  return (base * altura) / 2
}
console.groupEnd()

//Codigo del circulo
console.group("Circulo")
function diametroCirculo(radio) {
  return radio * 2
}
const PI = Math.PI

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return diametro * PI 
}

function areaCirculo(radio) {
  return PI * (radio * radio)
}
console.groupEnd()
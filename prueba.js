let name = "Ludwing"
let lastname = "Martinez"
let platziUser = "ludwingandres"
let age = 24
let email = "ludwing@ludwing.com"
let adult = True
let saveMoney = 15000
let payments = 7000

let completeName = `${name} ${lastname}`
let realMoney = saveMoney - payments

function presentation(name, lastname, nickname) {
  const completeName = name + lastname;
  
  return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."
}

console.log(presentation("Juan David", "Castro Gallego", "juandc"))

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

if (tipoDeSuscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let j = 10
while (j >= 2) {
  console.log("El valor de j es: " + j);
  j--
}

let answer = 0
while (answer != 4) {
  answer = prompt("Cuanto es 2 + 2");
}
console.log('La respuesta es correcta')

function firstData(arrayExample) {
  console.log(arrayExample[0])
}

let frutas = ['Pera', 'Manzana', 'Sandia'];
function values(numbers) {
  numbers.forEach(element => {
    console.log(element)
  });
}

let persona = {
  nombre: 'Oscar',
  apellido: 'Aguilar',
  edad: 21
}
function printObject(dictionary) {
  for (const property in dictionary) {
    console.log(`${property}: ${dictionary[property]}`)
  }
}
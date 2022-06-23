// let contador = document.getElementById("contador");
// let cont = -1;
// let circ1 = document.getElementById("circ");

// const ArrayFrutas = [
//   { nombre: "manzana", cantidad: 3 },
//   { nombre: "pera", cantidad: 5 },
//   { nombre: "banana", cantidad: 1 },
//   { nombre: "melon", cantidad: 0 },
// ];

// ArrayFrutas.push({nombre:"Anana",cantidad: 5});

// console.log(ArrayFrutas);
// ArrayFrutas.map((fruta) => {
//   console.log(" HAY " + fruta.cantidad + " DE " + fruta.nombre);
// });

// const Array = ["Manzana", "Pera", "Banana", "Melon"];
// let obetenerList = document.getElementById("list");
// let crearUl = document.createElement("ol");

// function presionar() {
//   cont++;
//   if (cont < ArrayFrutas.length) {
//     console.log(cont, ArrayFrutas.length);

//     contador.innerHTML = cont + 1;

//     cambiarColor();

//     let fruta = ArrayFrutas[cont];
//     let nuevaLista = document.createElement("li");
//     let liText = document.createTextNode(
//       " HAY " + fruta.cantidad + " DE " + fruta.nombre
//     );
//     crearUl.appendChild(nuevaLista);
//     nuevaLista.appendChild(liText);
//   }
// }
// obetenerList.appendChild(crearUl);

// function cambiarColor() {
//   if (cont % 2 == 1) {
//     circ1.classList.replace("circ", "circ2");
//   } else {
//     circ1.classList.replace("circ2", "circ");
//   }
// }

// const frutas = [{
//     "nombre":"manzana",
//     "cantidad": 5,
// }
// ]

// OBTIENE UN ELEMENTO LISTA Y CREA NUEVOS ELEMENTOS A PARTIR DE UN ARRAY

// let obetenerList = document.getElementById("list");
// let crearUl = document.createElement("ol");
// Array.map((fruta) => {

//   crearUl.appendChild(nuevaLista);
//   nuevaLista.appendChild(liText);
// });
// ;

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => response.json())
//   .then((pokemon) => {
//     let crearUl = document.createElement("ol");
//     let nuevaLista = document.createElement("li");
//     let liText = document.createTextNode(pokemon.name);
//     crearUl.appendChild(nuevaLista);
//     nuevaLista.appendChild(liText);
//     obetenerList.appendChild(crearUl);
//   });

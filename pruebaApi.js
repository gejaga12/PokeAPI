let obtenerNombre = document.getElementById("nombre");
let obtenerHabilidades = document.getElementById("habilidades");
let pokefoto = document.getElementById("pokefoto");
let pokefotoAtras = document.getElementById("pokefoto");
let form = document.forms["form"];
let pokeFotoAtras =
  "https://img.pokemondb.net/sprites/black-white/anim/back-normal/onix.gif";
let pokeFotoFrente =
  "https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif";

form.onsubmit = function (e) {
  e.preventDefault();
  let seleccion = document.form.nombrePokemon.value.toLowerCase();
  pokemonId = seleccion;
  buscarPokemon();
};

function buscarPokemon() {
  pokeFotoFrente= "https://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemonId + ".gif"
  pokeFotoAtras=  "https://img.pokemondb.net/sprites/black-white/anim/back-normal/"+ pokemonId +".gif";
  pokefoto.setAttribute("src", pokeFotoFrente);

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
    .then((response) => response.json())
    .then((pokemon) => {

      // pokefoto.setAttribute(
      //   "src",
      //   pokemon.sprites["other"]["official-artwork"]["front_default"]
      // );

      obtenerNombre.innerHTML = pokemonId;
      let textoNombre = document.createTextNode(pokemon.name.toUpperCase());

      let obtenerId = document.getElementById("ObtenerId");

      while (obtenerId.hasChildNodes()) {
        obtenerId.removeChild(obtenerId.firstChild);
      }

      let textoIdPokemon = document.createTextNode("ID: " + pokemon.id);
      let crearIdPokemon = document.createElement("h1");
      crearIdPokemon.appendChild(textoIdPokemon);
      obtenerId.appendChild(textoIdPokemon);

      let listaOrdenadaHabilidades = document.getElementById("habilidades");

      while (listaOrdenadaHabilidades.hasChildNodes()) {
        listaOrdenadaHabilidades.removeChild(
          listaOrdenadaHabilidades.firstChild
        );
      }

      pokemon.moves.map((nombreHabilidad, index) => {
        if (index < 4) {
          let textoNombreHabilidad = document.createTextNode(
            "•  " + nombreHabilidad.move.name
          );
          let crearNombreHabilidad = document.createElement("li");
          crearNombreHabilidad.appendChild(textoNombreHabilidad);
          obtenerHabilidades.appendChild(textoNombreHabilidad);
          listaOrdenadaHabilidades.appendChild(crearNombreHabilidad);
        }
      });
    });
}

let estadoFoto = false;

$("#pokefoto").click(function () {
  console.log(estadoFoto);
  if (estadoFoto == true) {
    $("#pokefoto").attr("src",pokeFotoFrente );
    estadoFoto = false;
  } else {
    $("#pokefoto").attr("src",pokeFotoAtras );
    estadoFoto = true;
  }
});

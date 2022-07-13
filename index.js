
class pokemon {
  constructor (nombre, tipo, vida, ataque ){
    this.nombre = nombre;
    this.tipo = tipo;
    this.vida = vida;
    this.ataque = ataque;
  }

  get pokemonVida() {
  return this.vida
  }

  get pokemonAtaque() {
    return this.ataque
  }

}

const pokemon1 = new pokemon ('Squartle','agua', 100, 25 )
console.log(pokemon1);
const pokemon2 = new pokemon ('Charmander','fuego', 100, 30 )
console.log(pokemon1);

console.log(pokemon1.pokemonVida);
console.log (pokemon2.pokemonVida)
console.log (pokemon1.pokemonAtaque)

// botones de ataque selector
const boton1Ataque = document.getElementById("botonAtaque1")
const boton2Ataque = document.getElementById("botonAtaque2")

// botones de Vida 
const vida1 = document.getElementById("vidaPokemon1")
const vida2 = document.getElementById("vidaPokemon2")

function batallaPokemon (button , counter, vida , ataque){
  

}


batallaPokemon(boton1Ataque, vida2, pokemon1.pokemonVida, pokemon1.pokemonAtaque);

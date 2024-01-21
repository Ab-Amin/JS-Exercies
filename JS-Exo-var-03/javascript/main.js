// var-03 | Concaténer des Chaînes de Caractères
// Déclarez 3 variables contenant des chaînes de caractères.
// Concaténez-les en une seule chaîne.
// Injectez le résultat dans le DOM.

let Game1 = "Elden Ring"
let Game2 = "Baldur's Gate 3"
let Game3 = "Final Fantasy XIV"

// let Games = Game1 + ", " + Game2 + " and " + Game3
let Games = `${Game1}, ${Game2} and ${Game3}`

console.log(Games)

let div = document.querySelector('div')

div.innerHTML += `my favorite games are ${Games}`










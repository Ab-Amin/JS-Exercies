// var-04 | Calculer une Moyenne
// Déclarez un tableau de nombres. (4, 60, 88, 127, 36, 95, 44 et 55)
// Affichez chaque nombre du tableau dans une liste à puces non numérotée dans le DOM à l’aide d’une boucle
// Déclenchez le calcul de la moyenne en appuyant sur un <button> et affichez le résultat dans le DOM


let tableau = [4, 60, 88, 127, 36, 95, 44, 55]

let listeAPuces = document.querySelector('ul')
let button = document.querySelector('button')
let moyenneDiv = document.querySelector('div')

for (let i = 0; i < tableau.length; i++) {
  listeAPuces.innerHTML += `  <li>${tableau[i]}</li>  `
}

button.addEventListener('click', function() {

  let sum = 0
  for (let i = 0; i < tableau.length; i++) { 
    
    sum += tableau[i]
    
    // console.log(sum);
    
    document.querySelector('div').innerHTML = sum / tableau.length 
  }
})





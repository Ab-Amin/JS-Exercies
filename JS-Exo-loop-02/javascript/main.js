// loop-02
// Créez deux tableaux de nombres de même longueur. (10, 55, 352, 4 et 543, 40, 0, 34)
// Utilisez une boucle for pour parcourir les deux tableaux et multipliez chaque paire
// d'éléments correspondants.
// Dans une troisième variable “somme”, ajoutez la somme de chaque produit
// Affichez la somme à l'utilisateur.


let tableau01 = [10, 55, 352, 4]
let tableau02 = [543, 40, 0, 34]

let multi = 0 
let sum = 0
let multiResults = []

for (let i = 0; i < tableau01.length; i++) {

  multi = tableau01[i]*tableau02[i]
  multiResults.push(multi) 

  console.log(multi)
  
  document.querySelector('body').innerHTML += `<p>${tableau01[i]} ∙ ${tableau02[i]} = ${multi}</p>`
  
  sum += multi
}

console.log(sum);

// for (let i = 0; i < multiResults.length; i++) {
//   document.querySelector('body').innerHTML += `<p> ${multiResults[i]}  = ${sum}</p>`
// }

document.querySelector('body').innerHTML += `<strong> ${multiResults[0]} + ${multiResults[1]} + ${multiResults[2]} + ${multiResults[3]} = ${sum}</strong>`











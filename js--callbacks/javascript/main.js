// fetch(`https://api.example.com/data`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })

// Etape 1

// Créez un tableau dans lequel se trouve 4 chiffres. 
// Créez ensuite une callback function dans laquel vous multipliez chacun des chiffres du tableau par 3. 
// Renvoyez le résultat sous forme de log.
// Il est important que cela soit fait sous forme d'une callback function.
// Une fois que vous obtenez le résultat dans votre log. Passez à l'étape 2.

// Etape 2

// Créez un bouton.
// Quand on clique sur le bouton, le résultat de la multiplication des chiffres du tableau apparait sous forme de titre dans le dom après un délai de 3 secondes.
// Pour se faire vous utiliserez votre fonction qui fait apparaître le titre après 3 secondes comme argument d'une callback function qui réagit au click.

// =-=-=-| etape 1 |-=-=-=

let tab = [1, 2, 3, 4]
let newTab = []

function multiply(num1, callback){
  multi = num1 * 3
  callback(multi)
}

function log(result) {
  console.log(result);
  newTab.push(result)
}

for (let i = 0; i < tab.length; i++) {
  multiply(tab[i], log)
}

console.log(tab);
console.log(newTab);

// =-=-=-| etape 2 |-=-=-=

function display(){
  for (let i = 0; i < newTab.length; i++) {
    document.querySelector('h1').innerHTML += `${tab[i]} x 3 = ${newTab[i]}, <br> `

  }
}


document.querySelector('button').addEventListener('click', display)











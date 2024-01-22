// loop-01 
// Créez un tableau de nombres. (35, 22, 153, 5, 67, 256599)
// Utilisez une boucle for pour parcourir le tableau et ajoutez chaque élément à une variable somme.
//  Affichez la somme à l'utilisateur.

let numbers = [35, 22, 153, 5, 67, 256599]

let sum = 0
for (let i = 0; i < numbers.length; i++) {
    
  sum += numbers[i]
    
  console.log(sum);
  
  document.querySelector('div').innerHTML = sum
}


















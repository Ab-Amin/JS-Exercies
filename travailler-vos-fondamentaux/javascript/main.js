// Les fondamentaux :

// 1. Écrivez une fonction qui prend deux nombres (a & b) comme arguments. Additionnez-les et retourner (avec return) le résultat
function exercice1(a, b) {
  return a + b
}
// console.log(exercice1(3, 7)); mais je me complique la vie :)

let ex1inputA = document.querySelector('.ex1-input-a')
let ex1inputB = document.querySelector('.ex1-input-b')
let ex1answer =  document.querySelector('.ex1-answer')

document.querySelector('.ex1-button').addEventListener('click', function(){
  if (ex1inputA.value != "" && ex1inputB.value != "") {
    ex1answer.innerHTML = `${exercice1(Number(ex1inputA.value), Number(ex1inputB.value))}`
    ex1inputA.value = ""
    ex1inputB.value = ""
  } else {
    ex1answer.innerHTML = `??`
  }
})


// 2. Écrivez une fonction qui prend deux valeurs (a & b) comme arguments. Retournez true si les deux valeurs sont égales ET du même type
function exercice2(a, b) {
  if (a == b) { // du meme type ???
    return true
  } else{
    return false
  }
}
// console.log(exercice2(5, 5));

let ex2inputA = document.querySelector('.ex2-input-a')
let ex2inputB = document.querySelector('.ex2-input-b')
let ex2answer =  document.querySelector('.ex1-answer')

document.querySelector('.ex2-button').addEventListener('click', function(){
  if (ex2inputA.value != "" && ex2inputB.value != "") {
    document.querySelector('.ex2-answer').innerHTML = `${exercice2(Number(ex2inputA.value), Number(ex2inputB.value))}`
    ex2inputA.value = ""
    ex2inputB.value = ""
  } else {
    ex1answer.innerHTML = `??`
  }
})

// 3. Écrivez une fonction qui prend une valeur comme argument. Retournez le type de cette valeur.
function exercice3(value) {
  return "exercice 3 : " + typeof(value)
}

let obj = {}
console.log(exercice3(obj));

// 4. Écrivez une fonction qui prend une valeur comme argument. Retournez le type de cette valeur.

console.log("exercice 4 : ¯\\_(ツ)_/¯");

// 5. Écrivez une fonction qui prend une chaîne de caractères (a) comme argument. Enlevez les trois premiers caractères de a. Retournez le résultat.
function exercice5(a) {
  a = a.slice(3)
  
  return a
}
// console.log(exercice5("123456789"));

let ex5inputA = document.querySelector('.ex5-input-a')
let ex5inputB = document.querySelector('.ex5-input-b')
let ex5answer =  document.querySelector('.ex5-answer')

document.querySelector('.ex5-button').addEventListener('click', function(){
  document.querySelector('.ex5-answer').innerHTML = `${exercice5(ex5inputA.value)}`

  ex5inputA.value = ""

})

// 6. Créez une fonction qui convertit un montant d'une devise à une autre. La fonction doit prendre en arguments le montant, la devise d'origine et la devise de destination.



// 7. Créez une fonction qui calcule le montant de la TVA belge pour un montant donné et un taux de TVA. La fonction doit prendre en arguments le montant et le taux de TVA.
function exercice7(price, tva) {
  return (price * (tva / 100))
}
// console.log(exercice7(1000, 21));

let ex7inputA = document.querySelector('.ex7-input-a')
let ex7inputB = document.querySelector('.ex7-input-b')
let ex7answer =  document.querySelector('.ex7-answer')

document.querySelector('.ex7-button').addEventListener('click', function(){
  if (ex7inputA.value != "" && ex7inputB.value != "") {
    ex7answer.innerHTML = `${exercice2(Number(ex7inputA.value), Number(ex7inputB.value))}`
    ex7inputA.value = ""
    ex7inputB.value = ""
  } else {
    ex7answer.innerHTML = `??`
  }
})

// 8. Créez une fonction qui calcule l'âge d'une personne à partir de sa date de naissance. La fonction doit prendre en argument la date de naissance à partir de ce qu'un input type=date retourne.



// 9. Créez une fonction qui détermine si un nombre est premier. La fonction doit prendre en argument un nombre.



// 10. Créez une fonction qui trouve le maximum et le minimum d'un tableau de nombres. La fonction doit prendre en argument le tableau de nombres.



// 11. Créez une fonction qui détermine si un nombre est divisible par 3 et 5. La fonction doit prendre en argument un nombre.



// 12. Créez une fonction qui trouve la valeur médiane d'un tableau de nombres. La fonction doit prendre en argument le tableau de nombres.



// 13. Créez une fonction qui supprime les doublons d'un tableau. La fonction doit prendre en argument le tableau.



// 14. Créez une fonction qui met en majuscule la première lettre de chaque mot d'une chaîne. La fonction doit prendre en argument la chaîne.



// 15. Créez une fonction qui détermine si une année est bissextile. La fonction doit prendre en argument l'année.



// 16. Écrivez une fonction qui prend deux tableaux de nombres comme arguments et retourne un nouveau tableau contenant tous les éléments des deux tableaux d'origine, sans doublons.



// 17. Écrivez une fonction qui prend une chaîne de caractères comme argument et retourne un tableau contenant chaque mot de la chaîne.



// 18. Écrivez une fonction qui prend un tableau d'objets comme argument et retourne un nouveau tableau contenant uniquement les objets dont la propriété "valeur" est supérieure à 10.



// 19. Écrivez une fonction qui prend deux dates comme arguments et retourne le nombre de jours écoulés entre les deux dates.



// 20. Écrivez une fonction qui prend une chaîne de caractères comme argument et retourne la position de la première occurrence d'une lettre particulière dans la chaîne.



// 21. Écrivez une fonction qui prend un tableau de nombres comme argument et retourne le nombre de nombres pairs et impairs dans le tableau.



// 22. Écrivez une fonction qui prend une chaîne de caractères comme argument et retourne la chaîne en majuscules et en minuscules.



// 23. Écrivez une fonction qui prend deux tableaux de nombres comme arguments et retourne un nouveau tableau contenant la somme des éléments des deux tableaux d'origine à la même position.



// 24. Écrivez une fonction qui prend une chaîne de caractères comme argument et retourne la chaîne triée par ordre alphabétique.



// 25. Écrivez une fonction qui prend un tableau d'objets comme argument et retourne un nouveau tableau contenant les objets triés par ordre croissant en fonction de leur propriété "prix".




// plus compliqué :
// 26. Écrivez une fonction qui prend une chaîne de caractères comme argument et retourne un booléen indiquant si la chaîne est un palindrome.



// 27. Écrivez une fonction qui prend un tableau de nombres comme argument et retourne le plus long sous-tableau dont les éléments sont dans l'ordre croissant.



// 28. Écrivez une fonction qui prend un tableau d'objets comme argument et retourne un nouveau tableau contenant les objets regroupés par leur propriété "catégorie".



// 29. Écrivez une fonction qui prend une chaîne de caractères comme argument et retourne la chaîne avec les espaces remplacés par des tirets bas.



// 30. Écrivez une fonction qui prend un tableau de nombres comme argument et retourne la moyenne, la médiane et la mode du tableau.




















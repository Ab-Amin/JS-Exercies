// obj-01 | Créer et afficher un objet simple
// Déclarez un objet littéral avec quelques propriétés (par exemple, nom, prenom, age).
// Affichez les valeurs de ces propriétés dans le DOM (Nom & prénom dans un <h2> et l’âge en indice)

let me = { name : 'Amin', surname : 'Abourrabia', age : 23 }

document.querySelector('body').innerHTML += 
`
<h2 title="${me.age} years old">${me.name} ${me.surname}</h2>

`

















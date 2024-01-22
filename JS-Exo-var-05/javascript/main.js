// var-05 | Manipuler l’objet Date
// Déclarez une variable et assignez-lui la date et l'heure actuelles en utilisant new Date().
// Affichez le jour, l’heure et les minutes actuelles dans le DOM dès le chargement de la page
// La doc est ici : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 

let currentDate = new Date()

console.log(currentDate);

document.querySelector('div').innerHTML += currentDate



let currentDay = currentDate.getDate()
let currentHours = currentDate.getHours()
let currentMinutes = currentDate.getMinutes()
let currentMonth = currentDate.getMonth() + 1
// janvier = 0 ??

let shorterCurrentDate = `on est le ${currentDay}/${currentMonth} et il est ${currentHours}:${currentMinutes}` 


console.log(shorterCurrentDate);

document.querySelector('p').innerHTML += shorterCurrentDate






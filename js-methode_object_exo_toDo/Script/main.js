//briefing :
// 1. Créez un objet JavaScript appelé "Personne" avec les propriétés suivantes :
//    - nom: Le nom de la personne.
//    - âge: L'âge de la personne.
//    - ville: La ville où habite la personne.
//    - sePrésenter: Une méthode qui affiche une introduction de la personne avec son nom, son âge et sa ville.

// 2. Créez deux instances de l'objet "Personne" pour représenter deux personnes différentes.

// 3. Appelez la méthode `sePrésenter` pour chacune des personnes pour qu'elles se présentent.



// Variables
let candidat1 = document.querySelector('.candidat1')
let candidat2 = document.querySelector('.candidat2')
let result = document.querySelector('.result')

// Définition de l'objet "Personne" qui contient une méthode "sePrésenter"

let candidats = {
  nom : '',
  age : 0,
  ville : '',
  infoCandidats(){
    // console.log(`${this.nom} ${this.age}ans, habite à ${this.ville}.`)
    result.innerHTML = `${this.nom} ${this.age}ans, habite à ${this.ville}.`
  }
};

// Création d'une première personne
let personne1 = Object.create(candidats)
personne1.nom = 'Amin';
personne1.age = 23;
personne1.ville = 'Bruxelles';

// Création d'une deuxième personne
let personne2 = Object.create(candidats)
personne2.nom = "clone d'Amin";
personne2.age = 67;
personne2.ville = 'la planète Mars';

let buttons = document.querySelector('.buttons')

// event pour qui appelle la méthode sePrésenter pour chaque personne
candidat1.addEventListener('click', () => {
  personne1.infoCandidats()
})

candidat2.addEventListener('click', () => {
  personne2.infoCandidats()
})


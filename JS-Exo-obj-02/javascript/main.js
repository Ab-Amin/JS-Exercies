// obj-02 | Créer et afficher un objet simple
// À partir d’un objet complexe (fourni sur discord), parcourez, à l’aide d’une boucle  et affichez : 
// le nom, l’âge et la profession de chaque utilisateur dans le DOM (choix de la présentation libre)
// l’adresse complète de chaque utilisateur dans un autre élément du DOM (choix de la présentation libre)

let utilisateurs = [
  {
    id: "user1",
    nom: "Martin",
    age: 28,
    profession: "Ingénieur Logiciel",
    compétences: ["Java", "Python", "Docker"],
    adresse: {
        rue: "10 Rue de l'Innovation",
        ville: "Lyon",
        codePostal: "69000"
    }
  },
  {
    id: "user2",
    nom: "Durand",
    age: 35,
    profession: "Designer Graphique",
    compétences: ["Photoshop", "Illustrator", "InDesign"],
    adresse: {
        rue: "55 Avenue de la Créativité",
        ville: "Marseille",
        codePostal: "13000"
    }
  },
  {
    id: "user3",
    nom: "Lefebvre",
    age: 40,
    profession: "Analyste de Données",
    compétences: ["SQL", "R", "Tableau"],
    adresse: {
        rue: "20 Rue des Données",
        ville: "Nantes",
        codePostal: "44000"
    }
  }
];


// console.log(utilisateurs[0]);

for (let i = 0; i < utilisateurs.length; i++) {
  
  document.querySelector('body').innerHTML += 
  `
  <p style="margin-bottom:0;"><strong>Nom :</strong> ${utilisateurs[i].nom}, <strong>Age :</strong> ${utilisateurs[i].age}, <strong>Profession :</strong> ${utilisateurs[i].profession}</p>
  <small>${utilisateurs[i].adresse.rue}, ${utilisateurs[i].adresse.ville} ${utilisateurs[i].adresse.codePostal}</small>
  `
}











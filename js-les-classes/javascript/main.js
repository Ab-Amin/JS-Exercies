// fetch(`https://api.example.com/data`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })

// créer et nommer une Class qui contient un constructeur avec différentes propriétés.
// dans cette Class créer différents modèles:
// 1. afficher un message pour informer que l'élève est bien enregistré, 
// 2. ajouter les données de l'élève dans un tableau
// 3. vérifier que la donnée dans la case "âge" est bien un chiffre (en bonus)

// Une fois fait, faites en sorte qu'à chaque enregistrement, un nouvel élève soit créer avec la Class créée et appelé les modèles nécessaires.


let confirmStudent = document.querySelector('.confirm')
let msgError = document.querySelector('.msg-error')

let studentsList = [] 

class students {
  constructor(name, familyname, age){
    this.name = name
    this.familyname = familyname
    this.age = age    
  }

  studentsInfo() {
    return `name : ${this.name} | family name : ${this.familyname} | age : ${this.age}`
  }

  addStudent(name, familyname, age) {
    msgError.innerHTML = ""
    studentsList.push(new students(name, familyname, age))

    console.log(studentsList);

    for (let i = 0; i < studentsList.length; i++) {
      document.querySelector('.student-list').innerHTML + `<p>${studentsList[i].name} ${studentsList[i].familyname}, ${studentsList[i].age}</p>`      
    }
  }
}

// =-=-| test |-=-= 
// let students1 = new students("Amin",  "Ab", "23")
// console.log(students1);

function oneSec(time) {
  setTimeout(() => {
    msgError.innerHTML = ""
  }, time);
}


confirmStudent.addEventListener('click', () => {

  let inputName = document.querySelector('#name')
  let inputFamilyName = document.querySelector('#family-name')
  let inputAge = document.querySelector('#age')

  if (inputName.value != "" && inputFamilyName.value != "" && inputAge.value != "") {
    if ((inputAge.value % 2) >= 0) {
      document.querySelector('.student-list').innerHTML = ""

      const newStudent = new students(inputName.value, inputFamilyName.value, inputAge.value)

      newStudent.addStudent(inputName.value, inputFamilyName.value, inputAge.value)
    } else {
      msgError.innerHTML = "Please enter a valid age :)"
      oneSec(1500)
    }
  } else {
    msgError.innerHTML = "Please complete the form :)"
  }

})



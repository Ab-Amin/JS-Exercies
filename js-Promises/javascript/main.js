// =-=-=-=-=-=-==-=-=-=-=-=-=| Promises |=-=-=-=-=-=-==-=-=-=-=-=-=

// Promise => objet renvoyé par une fonction asynchrone et qui représente l'état courant de l'opération (se produit dans le même temps)


// =-=-=-=-=-=-=| synchrone & asynchrone |=-=-=-=-=-=-=

// synchrone : bloque l'execution des ligne de code qui viennent aprés tant qu'il ne 'foncitonne' pas
// asynchrone : ne bloque pas
 

// let test = setTimeout(() => {
//   console.log('en retard');
// }, 1000);


// console.log(test);

// console.log('present');


// =-=-=-=-=-=-=| Etat des promesse |=-=-=-=-=-=-=

// 3 etat dans une promesses comme IRL : pending --> fulfilled ou rejected
// new Promise((resolve, reject) => {code asynchrone})









// function promiseExample() {
//   return new Promise(function(resolve, reject){
//     // resolve('promesse resolu :)')
//     reject('promesse rejecté :c')
//   })
// }

// console.log(promiseExample());




// + then; une fonction qui reçois la fonction à executer si résolu
// + catch(error); une fonction qui reçois la fonction à executer si rejeter

// console.log( promiseExample().then( function(piou) {console.log(piou);} ).catch(function(error) {console.log(error)}))







// =-=-=-=-=-=-=| simplifier la promesse |=-=-=-=-=-=-=


// console.log( 
  
//   promiseExample()
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {console.log(error);}) 
  
// ); 

// fetch(`https://api.exampe.com/data`)
//   .then(response => response.json())
//   .then(daa => {
//     console.log(data);
//   })


//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })



// =-=-=-=-=-=-=| pourquoi les promesse, comparaison avec les callback |=-=-=-=-=-=-=

// les Callback :

// function exampleFonction2(callback) {
//   setTimeout(() => {
//     console.log(...);
//     callback()
//   }, 1000);
// }

// exampleFonction2(() => { ...
//   exampleFonction3(() => { ...
//     exampleFonction4(() => { ...
//       exampleFonction5(() => { ...
//       })
//     })
//   })
// })


// - if(too much callback){callback hell}; se stack l'un sur l'autre et crée une pyramide de callback, 
// - affecte la lisibilité et la maintenance du code, 



// les Promesses :

// =-=-=-=-=-=-=| example promise |=-=-=-=-=-=-=


function toMetro() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved("metro-A 🚋 ... 🚶 ... 🏠 Home");
      
    }, 1000);
  })
}

// toMetro().then(data => {console.log(data);})

function changeMetro() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let metro = true

      if (metro) {
        resolve("metro-B 🚋 ... 🚶 ... 🚋 metro-A");
      } else{
        reject("Metro-B est indisponible, return Home 🏠 ... 🚋 metro-A ... 🚶")
      }

    }, 800);
  })
}

function toSchool() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let Olivier = true

      if (Olivier) {
        resolve("DigitalCity 🏢 ... 🚶 ... 🚋 metro-A");
      } else{
        reject("Olivier n'est pas là, t'es venu pour rien (._.)")
      }

    }, 1500);
  })
}


// + then; une fonction qui reçois la fonction à executer si résolu
// + catch(error); une fonction qui reçois la fonction à executer si rejeter
// + gestion d'erreur sur des opérations asynchrone plus complexe sera plus simple



// toMetro()
// .then(message => {console.log(message); return changeMetro()})
// .then(message => {console.log(message); return toSchool()})      
// .then(message => {console.log(message); console.log("Arrivé à votre destination!");})
// .catch(error => console.error("error : ", error))





// =-=-=-=-=-=-=| promise all & race |=-=-=-=-=-=-=

let testPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('test 1 ✔️')
  }, 1000);
})

let testPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('test 2 ✔️')
  }, 100);
})


let testPromise3 = new Promise((resolve, reject) => {
  resolve('test 3 ✔️')
})

// Promise.all([testPromise1, testPromise2, testPromise3])

// .then((messages) => console.log(messages)) // .all; tout en meme temps


// Promise.race([testPromise1, testPromise2, testPromise3])
// .then((message) => console.log("promise.race : " + message))

// .race; premier arrivé, premier servi





// =-=-=-=-=-=-=| Exercise |=-=-=-=-=-=-=

// Exercise:

// - Crée une fonction qui prendra un nom comme input(en argument) et return une promesse
// - La promesse devrait etre résolu aprés une attente de 2seconde
// - Si aucun nom n'a ete fourni, la promesse devrait etre rejeté avec un message d'erreur dans la console

// - Aprés avoir crée la fonction et l'avoir tésté dans la console, faire en sorte que la fonciton ne se lance que si on click sur confirm,
// - Crée deux .then, 1er sera le message d'attendre pendant 2seconde et le second le message  qui viendra de la promesse crée juste avant
// - Crée un .catch qui renvera votre message d'erreur de la fonction dans log et l'HTML


// utilisé que ce que vu sur les promesse évidemment,  gl :)





// 🔎 👇 indice sur la forme de la réponse 👇 🔍


// function delayedGreeting(name) {
//   return ...    
// }

// .addEventListener('click', () => {
//   delayedGreeting(... .value)
//     .then( ... )   --> message d'attente dans l'Html
//     .then( ... )   --> message de bienvenu aprés 2sec dans l'Html
//     .catch( ... )  --> message d'erreur dans log & Html
// })

function delayedGreeting(name) {
  return new Promise((resolve, reject) => {
    // Check si un nom a été fourni
    if (!name) {
      reject(`Aucun nom n'a été fourni`);
    } else {
      // simuler 2 seconde d'attente
      setTimeout(() => {
        resolve(`Bonjour, ${name}!`);
      }, 2000);
    }
  })
}

let inputName = document.getElementById('name')
let confirmName = document.getElementById('confirmName')
let result = document.querySelector('.result')

// delayedGreeting()


confirmName.addEventListener('click', () => {
  delayedGreeting(inputName.value)
  .then(result.innerHTML = `Wait...`) 
  .then(greeting => {
    result.innerHTML = greeting // (aprés 2 seconds)
  })
  .catch(error => { // erreur si pas de nom reçu
      console.error("error :", error); 
      result.innerHTML = `${error}`
  })
  inputName.value = ""
})









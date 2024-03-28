

btnOui = document.querySelector('.oui')
btnNon = document.querySelector('.non')

divResult = document.querySelector('.result')
divEssais = document.querySelector('.essais')

// console.log(random);

let essai = 1
let face = 0

btnOui.addEventListener('click',function () {
  let random = Math.round(Math.random() * 1);
  
  while (random == 1) {
    divResult.innerHTML = `
    <p>Résultat : Pile</p>`
    face++
    break
  }
  while (random == 0) {
    divResult.innerHTML = `
    <p>Résultat : Face</p>`
    break
  }

  let chance = ((face / essai) * 100).toFixed(2)
  
  divEssais.innerHTML = `<p>Nombre de lancers : ${essai} (${chance}% de Pile)</p>`
  
  essai++
})

btnNon.addEventListener('click', function(){
  divResult.innerHTML = `<p>Reset :)</p>`
  divEssais.innerHTML = ""
  face = 0
  chance = 0
  essai = 0
})

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let size = document.querySelector('#size') 
let confirmBtn = document.querySelector('#valide')

let tShirt = document.querySelector('.T-shirt')
function switchswitch() {
  switch (size.value) {
    case "XL":
    case "xl": // rejouter un autre caase sans break agis comme un ||
      tShirt.innerHTML = `
        <p>(XL) le prix pour ce t-shirt est de <strong>19,99€</strong></p>
        <div class="container-img">
            <img src="./img/2148091-Blanc-frontthumb1646691518-600x600.jpg.webp" alt="">
        </div>
      `
      break;
    case "M":
    case "m" :
        tShirt.innerHTML = `
        <p>(M) le prix pour ce t-shirt est de <strong>15,99€</strong></p>
        <div class="container-img">
            <img src="./img/cet-homme-est-deja-pris-par-une-infirmiere-t-shirt-homme.webp" alt="">
        </div>
      `
      break;
    case "S":
    case "s":
        tShirt.innerHTML = `
        <p>(S) le prix pour ce t-shirt est de <strong>13,99€</strong></p>
        <div class="container-img">
            <img src="./img/je-ne-vieillis-pas-idee-cadeau-anniversaire-t-shirt-femme.webp" alt="">
        </div>
      `
      break;
    default:
        tShirt.innerHTML = `
        <p>(L) le prix pour ce t-shirt est de <strong>17,99€</strong></p>
        <div class="container-img">
            <p>désolé, ce t-shirt n'est plus en stock :c</p>
        </div>
      `
      break;
  }
}

confirmBtn.addEventListener('click', function(){
  switchswitch()  
})  

size.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    switchswitch()
  }
})




let titulli = document.getElementById('header')
let fotoja = document.querySelector('img')
let paragrafi1 = document.querySelector('.firstP')
let paragrafi2 = document.querySelector('.secondP')
let from = document.querySelector('#from')

// nderron permbajtjen
titulli.textContent = 'Urime Ditelindjen 😉'
fotoja.src = 'https://static.vecteezy.com/system/resources/previews/000/690/859/original/happy-birthday-celebration-typography-design-for-greeting-card-vector.jpg'
paragrafi1.textContent = '🥳 Shendet e lumturi 🥳'
paragrafi2.innerHTML = '<i>Gjitha te mirat</i>'
from.textContent = 'Jeta Fazliu'

paragrafi1.style.backgroundColor = 'gold'
paragrafi2.style.textDecoration = 'underline'

// shton class me css te cilen osht i lidhun
titulli.classList.add('kol')
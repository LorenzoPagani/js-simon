const numberBox = document.getElementById('numContainer')
let numeriCasuali = []
let numeriInseriti = []

setTimeout(function() {
    inputNumbers(numeriInseriti)  
}, 11000);
setTimeout(function () {
  numberBox.style.display = 'none'
}, 10000)
getRandom(numeriCasuali, numberBox);




function inputNumbers (array) {
  for (let i = 0; i < 5; i++) {
    const inputNum = parseInt(prompt('inserisci i numeri in fila'))
     array.push(inputNum)
  }
}

function getRandom (array, print) {
  for (let i = 0; i < 5; i++) {
    const random = getRndInteger(1, 9)
    array.push(random)
  }
   (print.innerText = numeriCasuali)
}

function getRndInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

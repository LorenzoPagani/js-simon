const numberBox = document.getElementById('numContainer')
let numeriCasuali = []
let numeriInseriti = []
let numeriIndovinati = []
let result;

setTimeout(function () {
  numberBox.style.display = 'none'
}, 3000)
setTimeout(function () {
  inputNumbers(numeriInseriti)
  numeriIndovinati = []
  for (let i = 0; i < numeriInseriti.length; i++) {
    if (numeriInseriti[i] == numeriCasuali[i]) {
      numeriIndovinati.push(i + 1)
    }
  }
  result = alert(
    `hai azzeccato ${numeriIndovinati.length} numeri. ti sei ricordato le posizioni ${numeriIndovinati}`
  )
}, 4000)

getRandom(numeriCasuali, numberBox)

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
  print.innerText = numeriCasuali
}

function getRndInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

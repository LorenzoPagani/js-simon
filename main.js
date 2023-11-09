const numberBox = document.getElementById('numContainer');
const numeriCasuali = [];
getRandom(numeriCasuali);
setTimeout(function () {
  numberBox.style.display = 'none';
}, 3000);

setTimeout(function () {
  let numeriInseriti = inputNumbers();
  let numeriIndovinati = checkNumbers(numeriInseriti, numeriCasuali);
  
  if (numeriIndovinati.length == 0) {
    alert("non ne hai preso manco uno")
  }
  else if (numeriIndovinati.length == numeriInseriti.length) {
    alert("Li hai indovinati tutti, bravo!")
  }
  else if (numeriIndovinati.length == 1) {
    alert(`ne hai indovinato solo 1. ti sei ricordato il numero ${numeriIndovinati}`)
  }
  else {
      alert(
        `hai azzeccato ${numeriIndovinati.length} numeri. ti sei ricordato le posizioni ${numeriIndovinati}`
      );
  }
}, 4000);

function inputNumbers () {
  let array = [];
  for (let i = 0; i < 5; i++) {
    const inputNum = parseInt(prompt('inserisci i numeri in fila'));
    array.push(inputNum);
  }
  return array;
}

function getRandom (array) {
  for (let i = 0; i < 5; i++) {
    const random = getRndInteger(1, 9);
    array.push(random);
  }
  numberBox.innerText = array;
  return array;
}

function checkNumbers (numeriInseriti, numeriCasuali) {
  let numeriIndovinati = [];
  for (let i = 0; i < numeriInseriti.length; i++) {
    if (numeriInseriti[i] == numeriCasuali[i]) {
      numeriIndovinati.push(i + 1);
    }
  }
  return numeriIndovinati;
}

function getRndInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

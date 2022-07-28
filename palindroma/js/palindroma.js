
const word = prompt('Inserisci una parola')

function palindroma(){
    let wordArray = word.split("")
    let reverseArray = wordArray.reverse()
    return reverseArray.join('')
}

if(word == palindroma()){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola NON è palindroma');
  }
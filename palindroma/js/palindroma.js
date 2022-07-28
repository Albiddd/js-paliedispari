
let myword = prompt('Inserisci una parola')
myword = myword.toLowerCase()
function palindroma(){
    let wordArray = myword.split("")
    let reverseArray = wordArray.reverse()
    return reverseArray.join('')
}

if(myword == palindroma()){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola NON è palindroma');
  }
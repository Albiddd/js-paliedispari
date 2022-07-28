// chiedo all'utente di scegliere tra pari e dispari
let pariDispari = prompt('scegli pari o dispari');
pariDispari = pariDispari.toLowerCase();

//  controllo che abbia inserito valori consentiti
if (pariDispari !== 'pari' && pariDispari !== 'dispari'){
    alert('Elemento non valido. Puoi inserire solo "pari" o "dispari"!');
} else {

// chiedo all'utente di inserire un numero 
    const myNum = Math.round(parseInt(prompt('inserisci un numero da 1 a 5')));

 // controllo che il numero inserito sia valido
    if(myNum < 1 || myNum > 5 || isNaN(myNum)){
        alert('Elemento non valido. Puoi inserire solo numeri da 1 a 5!');
    }else{
        console.log('Hai scelto ' + pariDispari)
        console.log('Il tuo numero è: ' + myNum)

//  Genero casualmente il numero dell'avversario utilizzando una funzione
        function randomGenerate() {
            return parseInt(Math.floor(Math.random() * 5) +1);
        }

        let opponentNum = randomGenerate();
        // sommo i due numeri
        let sum = myNum + opponentNum;

        console.log('Il numero del tuo avversario è: ' + opponentNum)
        console.log('La somma de due numeri è: ' + sum)
        // creo una funzione per controllare che la somma risulti pari o dispari
        function check(){
            let even = false;
            if(sum % 2 == 0){
            even = true;
            }
            return even;
        }

        let result = check();

        if (result === true && pariDispari === 'pari' || result === false && pariDispari === 'dispari'){
            console.log('Hai Vinto!');
        } else{
            console.log('Hai perso :(')
        }

    }
}



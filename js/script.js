/*
 Consegna:
    Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
    Il computer deve generare 16 numeri casuali nello stesso range della 
    difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere 
    posizionata al massimo una bomba, 
    perciò nell’array delle bombe non potranno esserci due numeri uguali.
    In seguito l'utente clicca su una cella: se il numero è presente nella 
    lista dei numeri generati (delle bombe) - abbiamo calpestato una bomba - 
    la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata 
    si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
    La partita termina quando il giocatore clicca su una bomba o quando raggiunge il 
    numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte 
    le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di 
volte che l’utente ha cliccato su una cella che non era una bomba.

# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.

# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e 
il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti.

# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, 
controllando se il numero di cella è presente nell'array di bombe. Se si, 
la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che 
la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.

# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare 
se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la 
partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)

# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba 
o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il 
punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.

*/

//prendo i miei elementi
const btn = document.getElementById('start-game'); 
let game = document.getElementById('game');

// creo array
const bomb= [];
console.table(bomb)
const score = [];
console.table(score)

// functions
// randomizzatore dell bombe
function getArrayBombs () {
    while ( bomb.length < 16 ){
        let randomic= Math.floor(Math.random()* 100 -1) +1; 
        if (!bomb.includes(randomic)) {  //controllo se la bomba non è presente nell'array
            bomb.push(randomic);         // se NON è nella lista allora pusha.
        } 
    }
}

function createGrid (row=10, col=10 ) {
    
// creazione griglie
    //prendo numeri random per le bombe
    getArrayBombs();
    
    //calcolo numero di celle che mi servono 
    const totalCell= row * col;
    let number= 1;
    
    // ripeto per il risultato di totalCell volte, 1 per ogni griglia del gioco
    for( i = 1; i <= totalCell; i++) {
        
        
        // creo il div all'interno del html e gli aggiungo la classe
        const cell = document.createElement('div');
        cell.classList.add('cell')
        
        // porto nel dom
        game.appendChild(cell)
        cell.innerText = parseInt(number);
        
        //incremento
        number++;
        
        //azione per colorare di blu cliccano sulla cella 
        cell.addEventListener('click', (event) => {
            let cellNumber = event.target.innerText;
            
            // //blocco celle già premute
            // if (event.target.classList.contains('clicked')){
                
                // }
                //aggiungo classe ai selezionati    
                event.target.classList.add('clicked')
                score.push(event.target.innerText)      //metto in array score
            });
            
   }
}


//azione al click del bottone 
btn.addEventListener('click',() => {       
    // creo griglie
    grid = createGrid();
})

// conto quanti numero ho premuto finchè non premo una bomba o arrivo a 84

 if (score.includes(bomb)) {
     score.classList.add('red')
     console.log('Hai perso!');
 } else if (score.lenght == 84) {
     console.log('Hai vinto!');
 }


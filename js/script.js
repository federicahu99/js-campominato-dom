//prendo i miei elementi
const btn = document.getElementById('start-game'); 
let game = document.getElementById('game');

// functions
const createGrid = (row= 10, col=10 ) => {
   const totalCell= row * col;
    let number= 1;

    // ripeto per il risultato di totalCell volte, 1 per ogni griglia del gioco
    for( i = 1; i <= totalCell; i++) {

      // creo il div all'interno del html e gli aggiungo la classe
      let cell = document.createElement('div');
      cell.classList.add('cell')
   
      // porto nel dom
      game.appendChild(cell)
      cell.innerText = number;

      //incremento
      number++;

      //azione per colorare di blu cliccano sulla cella 
      cell.addEventListener('click', (event) => {
      event.target.classList.toggle('clicked')
      console.log(event.target.innerText)
    });
       
   }
}



//azione al click del bottone 
btn.addEventListener('click',() => {       
    // creo griglie
    grid = createGrid()
    
})



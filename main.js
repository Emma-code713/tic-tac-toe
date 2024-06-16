var cells = document.querySelectorAll(".cell");
var statusText = document.querySelector("#statusText");
var restart = document.querySelector("#restart");
var winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["","","","","","","","",""];
let currentPlayer = "x";
let runnning = false;

initializeGame();

 function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restart.addEventListener("click",restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    runnning = true;
 } 
 function cellClicked(){
       const cellIndex = this.getAttribute("cellIndex");

       if (options[cellIndex] != "" || !runnning){
        return;
       }
       updateCell(this,cellIndex);
       checkWinner();
 }
 function updateCell(cell,index){
       options[index] = currentPlayer;
       cell.textContent = currentPlayer;

 }
 function changePlayer() {
    currentPlayer = (currentPlayer == "x") ? "o" : "x";
    statusText.textContent = `${currentPlayer}'s turn`;
 }
 function checkWinner() {
    let roundWon = false;

    for(let i = 0; i < winCondition.length; i++){
        const condition = winCondition [i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if (cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }

    }
    if (roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        runnning = false;
    }
    else if (!options.includes("")){
        statusText.textContent = `draw!`;
        runnning = false 
    }
    else{
        changePlayer();
    }
    
 }
 function restartGame() {
     currentPlayer = "x";
     options = ["", "", "", "", "", "", "", "", ""];
     statusText.textContent = `${currentPlayer}'s turn` ;
     cells,forEach(cell => cell.textContent = "");
     runnning = true;
    
 }
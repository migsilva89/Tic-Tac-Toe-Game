let playerXChoices = []
let playerOChoices = []
let currentPlayer = "O"

const winningOptions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

function checkResult(player) 
{
    let playerOneMoves = getPlayerResult(playerOChoices);
    let playerTwoMoves = getPlayerResult(playerXChoices);

    winningOptions.forEach(element => {

        if (JSON.stringify(playerOneMoves) == JSON.stringify(element)){
               document.getElementById('winner').innerHTML = '🎉 Yay! Player '+player+' Wins!!'
            setTimeout(() => resetBoard(player), 250);
          
            return;
        }

        if (JSON.stringify(playerTwoMoves) == JSON.stringify(element)) {
             document.getElementById('winner').innerHTML = '🎉 Yay! Player '+player+' Wins!!'
            setTimeout(() => resetBoard(player), 250);
            
            return;
        }
    });
}

function resetBoard(player = null)
{
    currentPlayer = "0";
    playerXChoices = [];
    playerOChoices = [];
    document.querySelectorAll(".choice").forEach(boardSlot => boardSlot.innerHTML = '');
    
    // If we have a player that actuall own the game, then show the div yat! :p
    if(player !== null){
        document.getElementById('winner').innerHTML = '🎉 Yay! Player '+player+' Wins!!'
    }
    
    // Reset the winner div after 2 seconds ( 2 x 1000 ). We dont need the myTimeout variable here
    // But this is very important in vue and react because we want to clear any pending "effects"
    // Before unmounting the component.
    const myTimeout = setTimeout(() => document.getElementById('winner').innerHTML = '' , 1000);
}


function getPlayerResult(currentPlayerMoves)
{ 
    let filterPlayerMoves = winningOptions.filter(combo => combo.filter(comboValue => currentPlayerMoves.indexOf(comboValue) > -1).length == 3);
    return [].concat.apply([], filterPlayerMoves);
}

function toggleSlot(btnNumber) {

    const slotClicked = document.getElementById(`bt${btnNumber}`)

    let currentPreviousPlayer = currentPlayer

    // The slot is already filled, dont cheat please
    if(slotClicked.innerHTML != ""){
        return;
    }
    
    // Player O is playing, mark with a 0 and then switch to the next player
    if(currentPlayer == "O") {
        slotClicked.innerText = currentPlayer; //aqui leva o design do X
        slotClicked.innerHTML = `<img src="./images/O.png" alt="">`
        currentPlayer = "X";
        playerOChoices.push(btnNumber)
    }

     // Player X is playing, mark with a X and then switch to the next player
    else {
        slotClicked.innerText = currentPlayer;//aqui leva o design na roda
        slotClicked.innerHTML = `<img class="w-20 h-24" src="./images/x.png" alt="">`
        currentPlayer = "O"; 
        playerXChoices.push(btnNumber)
    }
   
    checkResult(currentPreviousPlayer)
}
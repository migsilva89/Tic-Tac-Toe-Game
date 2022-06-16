
const playerXChoices = []
const playerOChoices = []
var currentPlayer = "O"

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

function checkResult() {
    
    let res = winningOptions.filter(combo => combo.filter(comboValue => playerOChoices.indexOf(comboValue) > -1).length == 3);
    var resFinal = [].concat.apply([], res)

    winningOptions.forEach(element => {
        if (JSON.stringify(resFinal) == JSON.stringify(element)){
            console.log("ganhei")
        } 
    });
}

function getBtnNumber(btnNumber) {

    const firstBtn = document.getElementById(`bt${btnNumber}`)
    
    //AQUI BLOQUEAMOS JOGAR NO MESMO BTN
    if(firstBtn.innerText != "") return;

    //AQUI INNER TEXT TOMA VALOR DE CUURENT PLAYER
    firstBtn.innerText = currentPlayer;

    if(currentPlayer == "O") {
        currentPlayer = "X";
        playerOChoices.push(btnNumber)
    }  
    else {
        currentPlayer = "O"; 
        playerXChoices.push(btnNumber)
    }

    console.log(playerOChoices)
    console.log(playerXChoices)
    
    checkResult()

}







    
    



   



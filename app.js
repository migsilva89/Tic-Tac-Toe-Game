
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

function checkResult(player) {

    let res1 = winningOptions.filter(combo => combo.filter(comboValue => playerOChoices.indexOf(comboValue) > -1).length == 3);
    let resFinal1 = [].concat.apply([], res1)
    
    let res2 = winningOptions.filter(combo => combo.filter(comboValue => playerXChoices.indexOf(comboValue) > -1).length == 3);
    let resFinal2 = [].concat.apply([], res2)

    winningOptions.forEach(element => {
        if (JSON.stringify(resFinal1) == JSON.stringify(element)){
            alert(`${player} WINS!`)
        } else if (JSON.stringify(resFinal2) == JSON.stringify(element)) {
            alert(`${player} WINS!`)
        }
    });
}

function getBtnNumber(btnNumber) {

    const firstBtn = document.getElementById(`bt${btnNumber}`)
    let player = currentPlayer

    if(firstBtn.innerText != "") return;

    

    if(currentPlayer == "O") {
        firstBtn.innerText = currentPlayer;//aqui leva o design do X
        firstBtn.innerHTML = `<img src="./images/O.png" alt="">`
        currentPlayer = "X";
        playerOChoices.push(btnNumber)
    }  
    else {
        firstBtn.innerText = currentPlayer;//aqui leva o design na roda
        firstBtn.innerHTML = `<img class="w-20 h-24" src="./images/x.png" alt="">`
        currentPlayer = "O"; 
        playerXChoices.push(btnNumber)
    }

    checkResult(player)

}







    
    



   



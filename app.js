
const playerOneChoices = []
const playerTwoChoices = []

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

function checkResult(playerOneChoices) {
  
}

function saveBtnNumber(btnNumber) {

    const firstBtn = document.getElementById(`bt${btnNumber}`)
    
    if (playerOneChoices.includes(btnNumber)){
        
        const index = playerOneChoices.indexOf(btnNumber)
        playerOneChoices.splice(index, btnNumber)
        firstBtn.innerHTML = ""
        
    } else {
        playerOneChoices.push(btnNumber)
        firstBtn.innerHTML = "X"
    }
    // console.log(playerOneChoices)

    checkResult(playerOneChoices)
    console.log(playerOneChoices)
    
}







    
    



   



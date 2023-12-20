// main variables of our game
let gameLevel;
let gameChances = 0;
let totalChances = 0;
let ramainChances = gameChances;
let startNumber = 0;
let endNumber = 0;
let btn = document.getElementsByClassName("level")
let startDisplay = document.getElementById("start-game")
let playDisplay = document.getElementById("play-game")
let resultDisplay = document.getElementById("result")
let gameLevelDisplay = document.getElementsByClassName("game-level")[0]
let quitBtn = document.getElementById("quit")
let remainChancesDisplay = document.getElementById("remaining-chances")
let hintDisplay = document.getElementById("hint")
let checkNumberBtn = document.getElementById("check-number")
let inputNumber = document.getElementById("input-number")
let randomNumber = Math.round(Math.random() * 100);
let exitBtn = document.getElementById("exit")
let playAgainBtn = document.getElementById("play-again")
let preInput = []
let graphDisplay = document.getElementById("input-data")
let graphHeight = graphDisplay.style.height

//adding event listener to button
Array.from(btn).map((val) => {
    val.addEventListener("click", () => {
        gameLevel = val.getAttribute("id")
        startDisplay.style.display = "none"
        playDisplay.style.display = "block"
        gameLevelDisplay.innerHTML = gameLevel

        if (gameLevel == "easy") levelEasy()
        else if (gameLevel == "medium") levelMedium()
        else if (gameLevel == "hard") levelHard()

    })

})

quitBtn.addEventListener("click", () => {
    startDisplay.style.display = "block"
    playDisplay.style.display = "none"
    randomNumber = Math.round(Math.random() * 100);
    gameLevel = undefined;
    gameChances = 0;
    ramainChances = gameChances;
    startNumber = 0;
    endNumber = 0;
    preInput = []
    graphDisplay.innerHTML = ""
})

//play again btn
playAgainBtn.addEventListener("click", () => {
    resultDisplay.style.display = "none"
    startDisplay.style.display = "block"
    preInput = []
    graphDisplay.innerHTML = ""
})

//event listner to get the user input number
checkNumberBtn.addEventListener("click", () => {
    numberLogic(inputNumber.value, gameLevel)
})

//main number engine

function numberLogic(number, level) {
    //conditions
    if (gameChances == 0) resultCard(false)
    else if ((number == "") || (number > endNumber) || ((number < startNumber))) {
        alert("please enter valid number bro..!!")
    } else {

        preInput.push(Number(number))
        updateGraph()
        if (number > randomNumber && (number - randomNumber < 5)) hintVal = " you are close..go back"
        else if (number > randomNumber && (number - randomNumber < 10)) hintVal = " you are ahead..go back"
        else if (number < randomNumber && (randomNumber - number < 5)) hintVal = " you are backword..go forword"
        else if (number < randomNumber && (randomNumber - number < 10)) hintVal = " you are backword..go forword"


        else if (number > randomNumber) hintVal = "too high.. go back"
        else if (number < randomNumber) hintVal = "too low.. go forword"
        else if (number == randomNumber) resultCard(true)
        gameChances--;
        remainChancesDisplay.innerHTML = gameChances
        hintDisplay.innerHTML = hintVal

    }

}

function levelEasy() {
    gameChances = 10
    totalChances = 10
    startNumber = 1
    endNumber = 50
    remainChancesDisplay.innerHTML = gameChances
    hintDisplay.innerHTML = `Your Number is between ${startNumber} and ${endNumber}`
    if (randomNumber > 50) randomNumber = randomNumber - 50
}

function levelMedium() {
    gameChances = 6
    totalChances = 6
    startNumber = 1
    endNumber = 40
    remainChancesDisplay.innerHTML = gameChances
    hintDisplay.innerHTML = `Your Number is between ${startNumber} and ${endNumber}`
    if (randomNumber > 40) randomNumber = randomNumber - 50



}

function levelHard() {
    gameChances = 3
    totalChances = 3
    startNumber = 1
    endNumber = 30
    remainChancesDisplay.innerHTML = gameChances
    hintDisplay.innerHTML = `Your Number is between ${startNumber} and ${endNumber}`
    if (randomNumber > 30) randomNumber = randomNumber - 50



}
//display result
function resultCard(isWinner) {

    let resultStatement = document.getElementById("result-statement")
    let resultScore = document.getElementById("result-score")
    if (isWinner) {
        resultStatement.innerHTML = "Congrats!!You won the Game"
        resultScore.innerHTML = `Score:${ Math.round((gameChances)*100/(totalChances))}`

    } else {
        resultStatement.innerHTML = "You Loose the Game!!Better luck next time";
        resultScore.innerHTML = ""
    }
    playDisplay.style.display = "none"
    resultDisplay.style.display = "block"
    gameLevel;
    gameChances = 0;
    ramainChances = gameChances;
    startNumber = 0;
    endNumber = 0;
    randomNumber = Math.round(Math.random() * 100);

}

//functionality of display graph
function createColumn(length) {
    let bar = document.createElement("div")
    bar.style.width = "5%"

    bar.style.height = `${Number(length*2)}px`
    bar.style.backgroundColor = "blue"
    bar.innerHTML = length
    bar.style.padding = "15px"

    return bar
}

function updateGraph() {
    let newCol = createColumn(preInput[preInput.length - 1])
    graphDisplay.appendChild(newCol)


}
let playBtn = document.getElementById("play-btn")
let timerDisplay = document.getElementById("timer")
let gameStartDisplay = document.getElementById("game-start")
let gamePlayDisplay = document.getElementById("game-play")
let randomWordDisplay = document.getElementById("random-word")
let initTime = 3
let score = 0
let quitBtn = document.getElementById("quit-btn")
let playerWords = []
let currentRandomword = ''
let checkBtn = document.getElementById("check-btn")
playBtn.addEventListener("click", timer)
    //function to implement timer
function timer() {
    if (initTime >= 0) {
        a = setInterval(() => {
            timerDisplay.innerHTML = initTime;
            initTime--;
            if (initTime == -1) {
                clearInterval(a)
                initTime = 3
                gameStartDisplay.style.display = "none"
                gamePlayDisplay.style.display = "block"

            }

        }, 1000)
    } else {

        initTime = 5
    }
}


//main game logic of words

const words = ["java", "python", "typescript", "nodeJS", "flask", "angular", "django", "fastAPI", "microsoft", "react", "express", "DOM", "backend", "frontend", "rest", "docker", "aws", "azure", "pandas", "tensorflow", "matplotlib", "queryset"];
// choose random word from the Array and take care of same word will not be generated twice;



function createPlayerWordsDIct() {
    words.forEach((w) => { playerWords.push(w) })
}



function DisplayRandomWord() {
    let ind = Math.round(Math.random() * words.length)
    currentRandomword = playerWords[ind]
    console.log(currentRandomword);
    let newWord = shuffleWord(currentRandomword)
    randomWordDisplay.innerHTML = newWord
    delete playerWords[ind]


}

function shuffleWord(word) {
    let newWord = (word.split(""));
    let epoch = Math.round(Math.random() * 10)
    let randomIntOne;
    let randomIntTwo;

    for (let i = 0; i < epoch; i++) {
        randomIntOne = Math.floor(Math.random() * (word.length));
        randomIntTwo = Math.floor(Math.random() * (word.length));
        //swap
        let k = newWord[randomIntOne]
        newWord[randomIntOne] = newWord[randomIntTwo]
        newWord[randomIntTwo] = k



    }
    return newWord.join("")




}

DisplayRandomWord();

checkBtn.addEventListener("click", () => {
    alert(currentRandomword)
})
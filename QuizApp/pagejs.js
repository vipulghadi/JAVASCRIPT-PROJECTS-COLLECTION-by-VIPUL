//questions for squiz
const questions = [{
        "question": "1+2 is?",
        "options": ["3", "4", "123", "23"],
        "answer": 0
    },
    {
        "question": "1**99 is ..",
        "options": ["3324", "99", "1", "23"],
        "answer": 2
    },
    {
        "question": "who is modi?",
        "options": ["PM", "CM", "IAS", "RAS"],
        "answer": 0
    },

]


//initail variables
let score = 0;
let totalQuestions = questions.length;
let currentQIndex = 0
let isQuizOvered = false
let Qnum = document.getElementById("question-number")
let scorCard = document.getElementsByClassName("score")[0]
let gameOverCard = document.getElementsByClassName("game-over")[0]
let btn = document.getElementById("next-button")
let exitBtn = document.getElementById("exit-button")
Qnum.innerHTML = currentQIndex + 1
    // accessing info from webpage
console.log(exitBtn);

displayQuestion()

function displayQuestion() {
    que = document.getElementById("question")
        //accesing option
    options = document.getElementsByClassName("opt")
    console.log(options[0]);
    Array.from(options).map((val, ind) => {

        val.innerHTML = questions[currentQIndex]["options"][ind]
    });
    que.innerHTML = questions[currentQIndex]["question"];

}


//clicking next button

btn.addEventListener("click", onClickBtn)

function onClickBtn() {

    if (currentQIndex == questions.length - 1) {
        scorCard.innerHTML = score
        gameOverCard.style.display = "block"
        btn.style.display = "none"

    } else {
        //getting all input
        let notSelected = true
        let getOpt = document.getElementsByClassName("option");

        for (let i = 0; i < 4; i++) {

            if (getOpt[i].checked == true) {
                //do something
                getOpt[i].checked = false
                notSelected = false
                let id = getOpt[i].getAttribute("id")


                if (questions[currentQIndex]["answer"] == id) {
                    score++;
                }
                currentQIndex++;
                Qnum.innerHTML = currentQIndex + 1

                displayQuestion()

            }
        }
        if (notSelected) {
            currentQIndex = currentQIndex
        }
    }

}

exitBtn.addEventListener("click", () => {
    console.log("hiee");
    window.open("https://www.google.com");

})
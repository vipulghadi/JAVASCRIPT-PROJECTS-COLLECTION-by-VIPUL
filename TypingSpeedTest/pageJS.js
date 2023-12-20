let resetBtn = document.getElementById("reset-btn")
let inputTextDisplay = document.getElementById("input-text")
let randomTextDisplay = document.getElementById("random-text")
let curInput = "";
let resultD = document.getElementById("result")
let randomText = ["But now suppose Super and ListTree have their own versions of other same-named attributes, too.If we want one name from Super and another from ListTree, the orde ".toLowerCase(), "Multiple inheritance is an advanced tool. Even if you understood the last paragraph,it’ s still a good idea to use it sparingly and carefully".toLowerCase(), "vipulghadi", "ghadi"]

let isTyped = false
let isTimeSet = false
let startingTime = 0;
let endingTime = 0;


inputTextDisplay.addEventListener("keyup", (e) => {

    curInput = String(e.target.value)
    if (isTyped == false) setStartTime()
    else if (isTyped == true) getEndTime()
})


function setStartTime() {
    if (!isTimeSet) {
        startingTime = new Date().getTime()
        isTimeSet = true
    } else if ((randomTextDisplay.innerHTML.length) == (+curInput.length + 1)) isTyped = true
}

function getEndTime() {
    endingTime = new Date().getTime()
    inputTextDisplay.setAttribute("disabled", true)
    displayResult()

}

resetBtn.addEventListener("click", () => {
    let ind = Math.floor(Math.random() * randomText.length)
    randomTextDisplay.innerHTML = randomText[ind]
    inputTextDisplay.disabled = false
    inputTextDisplay.value = ""
    isTyped = false
    isTimeSet = false
    startingTime = 0;
    endingTime = 0;
    resultD.innerHTML = ""

})

function calAlphaMismatched() {
    console.log(typeof inputTextDisplay.value);
    let mm = 0;
    for (let i = 0; i < curInput.length; i++) {

        if (curInput[i] != (randomTextDisplay.innerHTML)[i]) mm++

    }
    return mm;
}


function displayResult() {

    let totalTime = (endingTime - startingTime)
    let totalAlpha = String(inputTextDisplay.value).length
    let am = calAlphaMismatched()

    resultD.innerHTML = `your typing speed is ${Math.round((totalAlpha/(totalTime/1000)))} alphabates per minute and total alphabate mismatches are:${am}`

}
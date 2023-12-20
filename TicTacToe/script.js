//create boxes
let mainBox = document.getElementsByClassName("boxes")[0];
let mainBoxStyle = getComputedStyle(mainBox)
let restartButton = document.getElementsByTagName("button")[0].addEventListener("click", restartGame);
let isGameOver = false;
let messageBox = document.getElementsByClassName("result")[0];
console.log(messageBox.firstElementChild);


//--------------------------------------------------------------------------------------
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let b1 = document.createElement("div");
        b1.setAttribute("id", `b${i}${j}`);
        b1.classList.add('box-style');
        mainBox.appendChild(b1);
        // console.log(`b${i}${j}`);
    }
}
// main array---------------------------------
let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function arrayFilling(choice, i, j) {

    arr[i][j] = choice;


    if (canWinner(choice, i, j) == 1) {
        GameOver(choice, 1)
    }


}

function canWinner(choice, i, j) {
    //row-wise check

    let rFlag = 1,
        cFlag = 1,
        ldFlag = 1,
        rdFlag = 1;

    for (let r = 0; r < 3; r++) {
        if (arr[i][r] != choice) {
            rFlag = 0;
            break;
        };

    }
    if (rFlag == 1) return 1;

    //column - wise check
    for (let c = 0; c < 3; c++) {
        if (arr[c][j] != choice) {
            cFlag = 0;
            break;
        }
    }
    if (cFlag == 1) return 1;

    //left diagonal(i==j)
    if (i == j) {
        for (let ld = 0; ld < 3; ld++) {
            if (arr[ld][ld] != choice) {
                ldFlag = 0;
                break;
            }
        }
        if (ldFlag) return 1;
    }
    //right diagonal(i+j==(size of arrayrow-1))

    if (i + j == 2) {
        let k = 2;
        for (let p = 0; p < 3; p++) {
            if (arr[p][k--] != choice) {
                rdFlag = 0;
                break;
            }
        }
        if (rdFlag) return 1;
    }
    //if no condition satisfy return 0;
    return 0;
}




//--------------------------------------------
let user1 = "X";
let user2 = "O";
let choice = user1;
let count = 1;
//displaying current user
let activeUser = document.getElementsByClassName("active-player")[0];


mainBox.addEventListener("click", (e) => {
    console.log("hi")
    let id = document.getElementById(`${e.target.id}`);

    let i = Number(id.id.split("")[1]);
    let j = Number(id.id.split("")[2]);

    if (arr[i][j] == 0 && !isGameOver) {

        activeUser.innerHTML = choice == user1 ? `player2` : `player1`;
        arrayFilling(choice, i, j);

        if (count == 9 && !isGameOver) GameOver(choice, 0);

        id.innerHTML = choice;
        count++;
        choice = choice == user1 ? user2 : user1;

    }

})






//restarting Game
function restartGame() {
    let boxes = document.getElementsByClassName("box-style");
    Array.from(boxes).forEach((item) => {
        item.innerHTML = "";
    })

    arr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    choice = user2;
    count = 1;
    activeUser.innerHTML = `player1`;
    messageBox.style.display = "none";
    isGameOver = false
}

function GameOver(choice, isWinner) {
    messageBox.style.display = "flex";
    isGameOver = true;
    if (isWinner) {
        let winner = choice == "X" ? "player1" : "player2";
        messageBox.firstElementChild.innerHTML = `${winner} Won the Game!`

    } else {
        messageBox.firstElementChild.innerHTML = `Match Draw!`
    }

}
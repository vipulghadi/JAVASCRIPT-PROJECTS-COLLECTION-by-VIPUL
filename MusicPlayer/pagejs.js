const songs_list = ['/songs/ud ja kale kawa guitar -Gadar .mp3', '/songs/Udd Jaa Kale Kawa - Gadar ! Hindi.mp3', '/songs/Arijit Singh - Rishton Ke Saare Manzar _ Best Hindi Ghazal Song with Lyrics _ Red Ribbon (1).mp3'];
let preBtn = document.getElementById("pre");
let playBtn = document.getElementById("play");
let nextBtn = document.getElementById("next");
let songNameDisplay = document.getElementsByClassName("song-details")[0]
let srcDisplay = document.getElementById("song-source")
let currIndex = 0;
let curSRC = songs_list[currIndex]
let songDetails = songs_list[currIndex].split("/")[2];
let songName = songDetails.split("-")[0]
let isPlaying = false
let audio = document.getElementsByTagName("audio")[0]
srcDisplay.setAttribute("src", curSRC)
songNameDisplay.innerHTML = songName
let songListBtn = document.getElementById("song-list-btn")
let functionalityDisplay = document.getElementById("functionality")
let songListDisplay = document.getElementById("song-list")
let backBtn = document.getElementById("back-btn")

function getCurrentSong() {
    songDetails = songs_list[currIndex].split("/")[2];
    songName = songDetails.split("-")[0]
    songNameDisplay.innerHTML = songName
}

function playSong() {
    if (isPlaying == false) {
        playBtn.innerHTML = "pause"
        audio.play()
        isPlaying = true
        playBtn.classList.add("bg-danger")


    } else if (isPlaying == true) {
        playBtn.innerHTML = "play"
        audio.pause()
        isPlaying = false
        playBtn.classList.remove("bg-danger")

    }


}


function preSong() {
    currIndex--;
    if (currIndex < 0) currIndex = songs_list.length - 1
    songDetails = songs_list[currIndex].split("/")[2];
    songName = songDetails.split("-")[0]
    songNameDisplay.innerHTML = songName
    curSRC = songs_list[currIndex]
    srcDisplay.setAttribute("src", curSRC)
    playBtn.innerHTML = "pause"
    audio.play()
    isPlaying = true
    playBtn.classList.add("bg-danger")

}

function nextSong() {
    currIndex++;
    currIndex = currIndex == songs_list.length ? 0 : currIndex
    songDetails = songs_list[currIndex].split("/")[2];
    songName = songDetails.split("-")[0]
    songNameDisplay.innerHTML = songName
    curSRC = songs_list[currIndex]
    srcDisplay.setAttribute("src", curSRC)
    playBtn.innerHTML = "pause"
    audio.play()
    isPlaying = true
    playBtn.classList.add("bg-danger")
}
//song-list-functionality

function createSongCard() {
    let card = document.createElement("div")
    card.style.padding = "10px"
    card.style.width = "100%"
    card.style.height = "auto"
    card.style.marginBottom = "10px"
    card.style.backgroundColor = "white"
    card.classList.add("rounded")
    card.style.cursor = "pointer"
    return card

}
songs_list.map((val, ind) => {
    let card = new createSongCard()
    card.innerHTML = val.split("/")[2]
    card.setAttribute("id", ind)
    card.classList.add("songs")

    songListDisplay.appendChild(card)

})
createSongCard()






//event listernerspl
playBtn.addEventListener("click", playSong)
preBtn.addEventListener("click", preSong)
nextBtn.addEventListener("click", nextSong)
songListBtn.addEventListener("click", () => {
    setTimeout(() => {
        functionalityDisplay.style.display = "none"
        songListDisplay.style.display = "block"

    }, 100)
})
backBtn.addEventListener("click", () => {
    setTimeout(() => {
        functionalityDisplay.style.display = "block"
        songListDisplay.style.display = "none"

    }, 100)
})

let songs = document.getElementsByClassName("songs")
Array.from(songs).map((val, ind) => {
    val.addEventListener("click", (e) => {

        currIndex = Number(e.target.id)

        songDetails = songs_list[currIndex].split("/")[2];
        songName = songDetails.split("-")[0]
        songNameDisplay.innerHTML = songName
        curSRC = songs_list[currIndex]
        srcDisplay.setAttribute("src", curSRC)
        playBtn.innerHTML = "pause"
        audio.play()
        isPlaying = true
        playBtn.classList.add("bg-danger")
    })
})
console.log(audio.duration());
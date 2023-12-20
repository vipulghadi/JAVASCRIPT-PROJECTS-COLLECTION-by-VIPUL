let textBox = document.getElementById("text-box");
let totalCount = 10;
let charRemainingDisplay = document.getElementById("char-remaining")
let charCountDisplay = document.getElementById("char-count")
let copyBtn = document.getElementById("copy");
let text;

textBox.addEventListener("keyup", () => {
    text = textBox.value
    if (totalCount < text.length) {
        text = String(text)
    }
    charRemainingDisplay.innerHTML = `${totalCount - text.length}`;
    charCountDisplay.innerHTML = `${text.length}`
})
copyBtn.addEventListener("click", copyText)

function copyText() {
    text.select()
    text.setSelectionRange(0, 999)
    navigator.clipboard.writeText(text)
}
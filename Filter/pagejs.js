let addNewNoteBtn = document.getElementById("add-new-note")
let mainBodyDisplay = document.getElementById("main-body")

addNewNoteBtn.addEventListener("click", () => { createNewNote() })
if ("ind" in localStorage == false) { localStorage.setItem("ind", "1") }

function createNewNote() {
    let note = document.createElement("div")
    note.innerHTML = `<div class="notepad bg-white rounded p-2" id="${localStorage["ind"]}" style="height: auto;width:250px;overflow:hidden;position:relative">

    <div id="costomize" class="d-flex p-1 justify-content-end mt-1 ">
        <button class=" mr-1 btn btn-primary d-flex justify-content-center align-items-center" style="border-radius: 50%;width:30px;height:30px;text-align:center" id="save">S</button>
        <button class=" mr-1 btn btn-success d-flex justify-content-center align-items-center " style="border-radius: 50%;width:30px;height:30px;text-align:center" id="edit">E</button>
        <button class=" mr-1 btn btn-danger d-flex justify-content-center align-items-center" style="border-radius: 50%;width:30px;height:30px;text-align:center" id="delete">D</button>

    </div>
    <div class="date rounded text-center" style="width: 80px;position:absolute;left:10px;top:20px;font-size:15px;background-color:rgb(209, 228, 236);">ef</div>

    <textarea name="" id="" cols="30" rows="10" style="width: 100%;;border:none;outline:none;background-color:rgb(243, 243, 245);height:auto" class="p-2 mt-2" placeholder="write something" >ef</textarea>


</div>`

    alert(localStorage["ind"])
    mainBodyDisplay.appendChild(note);

    let currentNotePad = document.getElementById(localStorage.getItem("ind"))
    const deleteBtn = currentNotePad.querySelector("#delete")
    const editBtn = currentNotePad.querySelector("#edit")
    const saveBtn = currentNotePad.querySelector("#save")
    const textarea = currentNotePad.querySelector("textarea")
    let currentDate = currentNotePad.querySelector(".date")

    deleteBtn.addEventListener("click", (e) => {
        console.log(note.remove());
    });

    editBtn.addEventListener("click", (e) => {
        textarea.removeAttribute("readonly")
    });

    saveBtn.addEventListener("click", (e) => {
        textarea.setAttribute("readonly", true)
        currentDate.innerHTML = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`


    })

    localStorage["ind"] = String(+(localStorage["ind"]) + 1);



}
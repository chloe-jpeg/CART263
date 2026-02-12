let theButtons = document.getElementsByClassName("titleBar");
for (let i = 0; i < theButtons.length; i++) {
    theButtons[i].addEventListener("click", saveStateHandler);
}

// the callback function
function saveStateHandler(event) {
    console.log(this.parentElement); // get parent element
    let buttonID = this.parentElement.id;
    let inputValue = this.parentElement.querySelector("input").value;
    console.log(inputValue);

    if (inputValue !== "") {
        localStorage.setItem(buttonID, inputValue);
        inputValue = "";
    }

}

document.getElementById("refresh").addEventListener("click", retrieveHandler);

function retrieveHandler() {
    for (let [key, value] of Object.entries(localStorage)) {
        let textBox = document.querySelector(`div[data-ref=${key}]`);
        //clear
        textBox.innerHTML = value;
    }

}


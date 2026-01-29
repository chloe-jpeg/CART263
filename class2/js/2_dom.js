window.onclick = setup
function setup() {
    let newDivTwo = document.createElement("div");
    newDivTwo.classList.add("square_shape");
    newDivTwo.innerHTML = " NEW ELEMENT TWO ";
    newDivTwo.style.backgroundColor = "yellow";
    newDivTwo.querySelector("p").style.color = "black"

    let sibling = document.querySelector("four")
    let parentElementAgain = document.querySelector(".wrapper_flex_box")
    parentElementAgain.insertBefore(newDivTwo, sibling);
}
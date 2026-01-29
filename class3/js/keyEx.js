let speedX = 5
window.onload = function () {
    window.addEventListener("keydown", function (event) {
        // document.querySelector("#textContainer").textContent += `${event.key} `;

        if (event.key === "ArrowRight") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) + speedX + "px";
        } else if (event.key === "ArrowLeft") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) - speedX + "px";
        }
    })

    window.addEventListener("keyup", function (event) {
        if (event.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(112, 184, 226)";
        }
    })

}


//notes on the $ = look it up man i have no idea why its there
// also the = == === 
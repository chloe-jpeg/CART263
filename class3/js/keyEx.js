let speedX = 5
window.onload = function () {


    window.setInterval(moveBoxB, 20);
    function moveBoxB() {
        document.getElementById("boxB").style.left =
            parseInt(document.getElementById("boxB").style.left) + speedX + "px";
    }


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
            document.getElementById("boxA").style.background = "rgb(108, 132, 146)";
        }
    })

}


//notes on the $ = look it up man i have no idea why its there
// also the = == === 
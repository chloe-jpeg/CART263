window.onload = function () {
    let drawBox = document.querySelector("#draw-box-a");
    drawBox.addEventListener("mousemove", moveCallBack);

    function moveCallBack(e) {
        let rect = this.getBoundingClientRect()
        let offsetX = e.clientX - rect.x;
        let offsetY = e.clientY - rect.y;
        //this is to make the coords start at 0 in the rect

        // drawBox.innerHTML = `x: ${offsetX}, y:${offsetY}`; //mouse coords relative to the window

        let pointDiv = document.createElement("div");
        pointDiv.classList.add("point");
        pointDiv.style.left = offsetX + "px";
        pointDiv.style.top = offsetY + "px";
        this.appendChild(pointDiv);
    }
}


//(e) = using an event (look it up to make sure)
//

//innerhtml is <div id="draw-box-a" class="box">!!</div> right at the !! in the html, presently empty but its to access that part
class Sun {
    constructor(x, y, sunColor) {
        this.x = x;
        this.y = y;
        this.vx = 1; //for movement on x
        this.vy = 1; //for movement on y
        this.sunColor = sunColor;
        this.sunDiv = document.createElement("div")

        window.addEventListener("keydown", function handleKeyDown(event) {
        });
    }


    renderSun() {
        // //sun - IN the sky
        this.sunDiv.classList.add("sun");
        this.sunDiv.style.background = `rgb(${this.sunColor.r},${this.sunColor.g},${this.sunColor.b})`;
        // //append to the SKY div
        document.querySelector(".sky").appendChild(this.sunDiv);
    }


    handleKeyDownInSun(e) {

        if (e.key === "w") {
            console.log("up");
            this.y -= this.vy;
            this.updateDivPos();
        }
        if (e.key === "a") {
            console.log("left");
            this.x -= this.vx;
            this.updateDivPos();
        }
        if (e.key === "s") {
            console.log("down");
            this.y += this.vy;
            this.updateDivPos();
        }
        if (e.key === "d") {
            console.log("right");
            this.x += this.vx;
            this.updateDivPos();
        }
    }
    updateDivPos() {
        this.sunDiv.style.left = this.x + "px";
        this.sunDiv.style.top = this.y + "px";
    }
}
document.addEventListener("DOMContentLoaded", () => {

    let selectedPainting = "";
    let timer;
    let timeLeft = 0;
    let isRunning = false;

    /* Elements */
    const enterBtn = document.getElementById("enterBtn");
    const backBtn = document.getElementById("backBtn");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    const arts = document.querySelectorAll(".art");

    /* Screen control */
    function showScreen(id) {
        document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
        setTimeout(() => {
            document.getElementById(id).classList.add("active");
        }, 50);
    }

    /* Navigation */
    enterBtn.onclick = () => showScreen("galleryScreen");
    backBtn.onclick = () => {
        stopTimer();
        showScreen("startScreen");
    };

    /* Select painting */
    arts.forEach(art => {
        art.addEventListener("click", () => {
            selectedPainting = art.src;

            let display = document.getElementById("paintingDisplay");
            let end = document.getElementById("endPainting");

            showScreen("timerScreen");

            document.getElementById("paintingImg").src = art.src;
            document.getElementById("endImg").src = art.src;

            display.classList.remove("showPainting");

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    display.classList.add("showPainting");
                });
            });
        });
    });

    /* Timer controls */
    startBtn.onclick = startTimer;
    stopBtn.onclick = stopTimer;

    function startTimer() {
        if (isRunning) return;
        clearInterval(timer);

        let minutes = document.getElementById("timeInput").value;

        if (!minutes || minutes <= 0) {
            alert("Enter valid time");
            return;
        }

        timeLeft = minutes * 60;
        isRunning = true;
        updateDisplay();

        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                clearInterval(timer);
                isRunning = false;

                let endImg = document.getElementById("endImg");
                endImg.src = selectedPainting;
                endImg.classList.remove("showPainting");

                showScreen("endScreen");

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        endImg.classList.add("showPainting");
                    });
                });
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    function updateDisplay() {
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;

        document.getElementById("timerText").textContent =
            `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
});
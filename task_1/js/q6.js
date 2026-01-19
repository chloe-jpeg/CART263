"use strict";

function setup() {
    createCanvas(600, 600)
}

function draw() {
    background(0)

    push()
    fill(255)
    textSize(28)
    textAlign(CENTER, CENTER)
    text("test", width / 2, height / 2)
    pop()

    for (let i = 0; i < 10; i++) {
        push()
        fill(255, 255, 255)
        textSize(28)
        text(i, 20, i * 30 + 40)
        pop()
    }
}

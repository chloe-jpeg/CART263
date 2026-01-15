"use strict";

let rect1 = {
    r: 255,
    g: 244,
    b: 229
}

let rect2 = {
    r: 255,
    g: 192,
    b: 203
}

let rect3 = {
    r: 126,
    g: 63,
    b: 18
}

function setup() {
    console.log("go")
    createCanvas(600, 600)

}

function draw() {
    background(78, 159, 229)

    push()
    noStroke()
    fill(rect1.r, rect1.g, rect1.b)
    rect(0, 0, 200, 600)
    pop()

    push()
    noStroke()
    fill(rect2.r, rect2.g, rect2.b)
    rect(200, 0, 200, 600)
    pop()

    push()
    noStroke()
    fill(rect3.r, rect3.g, rect3.b)
    rect(400, 0, 200, 600)
    pop()

    mouseHover()
}


function mouseHover() {
    if (mouseX < 200) {
        rect1.r = 78
        rect1.g = 159
        rect1.b = 229
    }
    else {
        rect1.r = 225
        rect1.g = 244
        rect1.b = 229
    }


    if (mouseX >= 200 && mouseX < 400) {
        rect2.r = 78
        rect2.g = 159
        rect2.b = 229
    }
    else {
        rect2.r = 255,
            rect2.g = 192,
            rect2.b = 203
    }


    if (mouseX >= 400) {
        rect3.r = 78
        rect3.g = 159
        rect3.b = 229
    }
    else {
        rect3.r = 126
        rect3.g = 63
        rect3.b = 18
    }
}
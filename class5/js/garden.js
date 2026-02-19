window.onload = function () {
    let garden = {
        flowers: [],
        numFlowers: 20,

        grass: {
            grassColor: {
                r: 120,
                g: 180,
                b: 120,
            },
            grassDiv: document.createElement("div"),
        },
        sky: {
            skyColor: {
                r: 83,
                g: 154,
                b: 240,
            },
            skyDiv: document.createElement("div"),
        },
        sun: {
            sunColor: {
                r: 240,
                g: 206,
                b: 83,
            },
            //the sun element
            sunDiv: document.createElement("div"),
        },
    };

    function createAndRenderTheGarden() {
        garden.sky.skyDiv.classList.add("sky");
        garden.sky.skyDiv.style.background = `rgb(
            ${garden.sky.skyColor.r},
            ${garden.sky.skyColor.g},
            ${garden.sky.skyColor.b}
            )`;
        document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);

        garden.sun.sunDiv.classList.add("sun");
        garden.sun.sunDiv.style.background = `rgb(
            ${garden.sun.sunColor.r},
            ${garden.sun.sunColor.g},
            ${garden.sun.sunColor.b}
            )`;
        //append to the SKY div
        document.getElementsByClassName("sky")[0].appendChild(garden.sun.sunDiv);

        //grass
        garden.grass.grassDiv.classList.add("grass");
        garden.grass.grassDiv.style.background = `rgb(
            ${garden.grass.grassColor.r},
            ${garden.grass.grassColor.g},
            ${garden.grass.grassColor.b}
            )`;
        document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);


        // add numFlowers at one time
        for (let i = 0; i < garden.numFlowers; i++) {
            let flower = new Flower();
            garden.flowers.push(flower);
        }

        for (let i = 0; i < garden.flowers.length; i++) {
            garden.flowers[i].renderFlower();
            // renderFlower(garden.flowers[i]);

        }
    }


    createAndRenderTheGarden();
}
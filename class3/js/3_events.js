window.onload = setup;
function setup() {

    let introSection = document.querySelectorAll(".mouseclick-active-section");

    array.forEach(element => {

        element.addEventListener("click", function (e) {
            //check if is inactive
            if (this.getAttribute("custom-bool") === "inactive") {

                this.setAttribute("custom-bool", "active");

                console.log("is inactive");
                console.log(this.id)

                this.style.opacity = 0.5;
            }
            else {
                this.setAttribute("custom-bool", "inactive");
                this.style.opacity = 1.0;
            }
        });


        document.querySelector("#bubbleButton").addEventListener("click", function () {
            console.log("button clicked");

            let bubble = document.createElement("div");
            bubble.classList.add("bubble");
            bubble.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
            bubble.style.top = `${Math.random() * (window.innerHeight - 200)}px`;

            let r = Math.ceil(Math.random() * 255); //new Math.ceil
            let g = Math.ceil(Math.random() * 255);
            let b = Math.ceil(Math.random() * 255);

            bubble.style.background = `rgba(${r},${g},${b})`;
            document.getElementById("top-layer").appendChild(bubble) //to make is connect to the html, not just floating somwhere in the code
        })


    });

}

// querySelector for one, took id (#) & adding the event Selector for that one

//now selectionAll, took class (.) for each one of them add an event selector that listen to the click -> then makes the change

//# is id, . is class

//check out what the fuck is a dynamic strip bc i Do Not understand that shit

//querySelector is through css and flexible and you can define by div, id or class
//getElementbyid is much more specific, gets for sure the id and no need to use #
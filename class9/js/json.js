window.onload = goFetch;
async function goFetch() {
    try {

        // let response = await fetch('../files/tests.json'); //response
        // let parsedResultJS = await response.json();
        // console.log(parsedResultJS)
        // for (let i = 0; i < 10; i++) {
        //     document.querySelector("#output_rev").innerHTML +=
        //         `POST ${i} title:  ${posts[i].title}`
        // }

        let urlA = `https://cataas.com/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square&json=true`
        let urlB = `https://cataas.com/cat?json=true`
        //
        let response = await fetch(urlB) //response
        let cat = await response.json();
        console.log(cat)
        displayOnSite(cat.url)

    }

    catch (err) {

        console.log(err)
    }
}


function displayOnSite(path) {
    console.log(path)
    document.querySelector("#output_rev").innerHTML += `<img style = "width:90%"src= ${path} />`
}

function displayResults(parsedResultJS) {
    for (let i = 0; i < parsedResultJS.length; i++) {
        console.log(parsedResultJS)

        //the object
        let donutObj = parsedResultJS[i];
        //container
        let containerDiv = document.createElement("div");
        containerDiv.classList.add("donutItem");
        document.querySelector("#output").appendChild(containerDiv);

        let title = document.createElement("h3");
        title.textContent = donutObj.name;
        containerDiv.appendChild(title)

        //access the image
        let donutImage = document.createElement("img");
        donutImage.src = donutObj.image;
        containerDiv.appendChild(donutImage)
    }

}

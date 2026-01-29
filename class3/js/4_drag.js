window.onload = setup;
function setup() {
    console.log("drag ex");
    let handleDragging = function (event) {
        console.log("on drag")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);

        event.dataTransfer.cleatData();
        event.dataTransfer.setData("objDraggedId");
    };

    let handleDraggingStop = function (event) {
        console.log("on stop")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
        // HERE - this refers to the window
        console.log(this);
    };

    let handleDrop = function (event) {
        event.preventDefault();
        console.log("dropped")

        let theObj = event.dataTransfer.getData("objDraggedId")
        event.target.appendChild(document.getElementById(theObj))
    }
    window.addEventListener("drop", handleDrop)

    window.addEventListener("dragover", function (event) {
        console.log("over");
        event.preventDefault();
    });


    window.addEventListener("dragstart", handleDragging);
    window.addEventListener("dragend", handleDraggingStop);

}
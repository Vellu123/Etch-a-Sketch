let containerDiv = document.getElementById("container");



for (row=0;row<=15;row++){


    for (column=0;column<= 15;column++){
        let box = document.createElement("div");
        box.className = "gridBox";
        containerDiv.appendChild(box);

    }
}
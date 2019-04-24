let containerDiv = document.getElementById("container");



for (row=0;row<=15;row++){


    for (column=0;column<= 15;column++){
        let box = document.createElement("div");
        box.id = "gridBox";
        containerDiv.appendChild(box);

    }
}

function boxColor(){
    console.log(this);
    document.getElementById("gridBox").classList.add("coloredBox");
    return;
}

document.getElementById("gridBox").addEventListener("mouseover", boxColor);
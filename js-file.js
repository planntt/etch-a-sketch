let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

let val = slider.value;
function genGrid(num) {
    let container = document.querySelector("#container");
    for(let i = 0;i < num; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j <= num; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.innerText = (i * num) + j;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

genGrid(val);
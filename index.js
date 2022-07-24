
const moveButton = document.querySelector("#boxButton");
const box = document.getElementById("myBox")

moveButton.addEventListener("click", move);

function move(){
    console.log("click")
    let timerId = null;
    let x = 0;
    let y = 0;
    let degrees = 0;

    timerId = setInterval(mover, 20);

    function mover(){
        if ( x >= 200 && y >= 200 && degrees >= 180) {
            clearInterval(timerId);
        } else {
            x += 5;
            y += 5;
            degrees += 3;
            box.style.left = x + "px"; 
            box.style.top = y + "px"; 
            box.style.border = `5px dashed yellow`
            box.style.transform = `rotateY(${degrees}deg)`;
        } 
    }
     
}
// Declare Variables
let body = document.querySelector('body');
let button = document.querySelector('button');
let Hexcolors = "123456789ABCDEF";


// Add Event Listener
document.querySelector('button').addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    let myColor = Math.floor(Math.random() * 16777216).toString(16);
    document.querySelector('body').style.background = '#' + myColor;
    hex.innerHTML = '#' + myColor;
}
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector('.mainbutton');
const color = document.querySelector('.currentcolor');

button.addEventListener('click', getHexValue)



function getHexValue(){
    let hexColorArray = [];
    for(let i=0; i<6; i++){
        hexColorArray.push(hex[Math.floor(Math.random()*hex.length)]);
    }
   document.body.style.backgroundColor = '#'+ hexColorArray.join('')
   document.querySelector('.currentcolor').innerHTML = '#'+ hexColorArray.join('')
}
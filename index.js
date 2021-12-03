const colors = ['Green','Red', 'RGBA(133,122,200)', '#F15025'];

const button = document.querySelector('.mainbutton');
const color = document.querySelector('.currentcolor');

button.addEventListener('click', changeBG)



function changeBG(){
    let randomNumber = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    document.querySelector('.currentcolor').innerHTML = colors[randomNumber];
}
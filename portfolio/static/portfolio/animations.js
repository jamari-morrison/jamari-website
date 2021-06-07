

const one = document.querySelector('#box-area');
const time = 1;
const work = one.children;

function setZeroVars(){
    work[0].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeZero = Math.floor(Math.random()*180) + 20;
    work[0].style.width= sizeZero + "px";
    work[0].style.height= sizeZero + "px";

}
function setOneVars(){
    work[1].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeOne = Math.floor(Math.random()*180) + 20;
    work[1].style.width= sizeOne + "px";
    work[1].style.height= sizeOne + "px";

}

function setTwoVars(){
    work[2].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeTwo = Math.floor(Math.random()*180) + 20;
    work[2].style.width= sizeTwo + "px";
    work[2].style.height= sizeTwo + "px";

}

function setThreeVars(){
    work[3].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeThree = Math.floor(Math.random()*180) + 20;
    work[3].style.width= sizeThree + "px";
    work[3].style.height= sizeThree + "px";

}

function setFourVars(){
    work[4].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeFur = Math.floor(Math.random()*180) + 20;
    work[4].style.width= sizeFour + "px";
    work[4].style.height= sizeFour + "px";

}

function setFiveVars(){
    work[5].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeFive = Math.floor(Math.random()*180) + 20;
    work[5].style.width= sizeFive + "px";
    work[5].style.height= sizeFive + "px";

}

function setSixVars(){
    work[6].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeSix = Math.floor(Math.random()*180) + 20;
    work[6].style.width= sizeSix + "px";
    work[6].style.height= sizeSix + "px";

}



work[0].addEventListener("animationiteration", setZeroVars);
work[1].addEventListener("animationiteration", setOneVars);
work[2].addEventListener("animationiteration", setTwoVars);
work[3].addEventListener("animationiteration", setThreeVars);
work[4].addEventListener("animationiteration", setFourVars);
work[5].addEventListener("animationiteration", setFiveVars);
work[6].addEventListener("animationiteration", setSixVars);



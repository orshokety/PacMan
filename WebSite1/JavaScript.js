const step = 5;
var idFoodNumber = 0;
var score = 0;
var scoreStr = `your score is: ${score}`;
setInterval(() => (CreateFood(Foods)), 2500);
setInterval(()=>(Eat()), 500);
var Foods = [];
var elem = document.querySelector(`#img`);
var div = document.createElement(`DIV`);
document.body.appendChild(div);
div.style = `position:absolute;left:50%`;
div.left = `50%`;
setInterval(()=>(newScore()), 500);

function newScore() {
    scoreStr = `your score is: ${score}`
    div.innerHTML = scoreStr
}
    

function moveUp(elem) {
    Move(elem, `top`, -step)
    elem.style[`transform`] = `rotate(270deg)`
}
function moveDown(elem) {
    Move(elem, `top`, step)
    elem.style[`transform`] = `rotate(90deg)`
}
function moveLeft(elem) {
    Move(elem, `left`, -step);
    elem.style[`transform`] =`scaleX(-1)`
}
function moveRight(elem) {
    Move(elem, `left`, step)
    elem.style[`transform`] = `scaleX(1)`
}
function Eat() {
    for (let i = 0; i < Foods.length; i++) {
        let elemPosition = elem.getBoundingClientRect();
        let foodPosition = Foods[i].getBoundingClientRect();
        if (elemPosition.x == foodPosition.x, elemPosition.y == foodPosition.y, (elemPosition.x) + 50 == foodPosition.x, elemPosition.y + 50 == foodPosition.y) {
            let remove = document.querySelector(`#food${i}`);
            document.body.removeChild(remove);
            score++;


        }
    }

}
function Move(elem, prop, step) {
    var oldVal = getStyleVal(elem, prop)
    var newVal = oldVal + step
    setStyleVal(elem, prop, newVal)
}


function getStyleVal(elem,prop) {
    return parseInt(elem.style[prop])
}
function setStyleVal(elem, prop, newVal) {
    elem.style[prop] = newVal + `px`;
}
document.onkeydown = function (e) {

    
    switch (e.key) {
        case `ArrowUp`: moveUp(elem);
            break;
        case `ArrowDown`: moveDown(elem);
            break;
        case `ArrowRight`: moveRight(elem);
            break;
        case `ArrowLeft`: moveLeft(elem);
            break;
        default:
    }
}
function CreateFood(Foods) {
     let food = new Image(10, 10);
    food.src = "images/אוכל.png";
    food.style = `position:absolute;left:${RandomLeft()}px;top:${RandomTop()}px;`;
    food.id=`food${idFoodNumber}`
    document.body.appendChild(food);
    Foods.push(food);
    idFoodNumber++
}
function RandomTop() {
  return Math.round(Math.random() * 500)
}
function RandomLeft() {
    return Math.round(Math.random() * 800)
}
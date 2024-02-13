'use strict'
let heightWidth = 100

function onBallClick(elBall){
    if(heightWidth >= 400) heightWidth = 50
    heightWidth += getRandomInt(20,61)
    elBall.style.width = heightWidth + 'px'
    elBall.style.height = heightWidth + 'px'
    elBall.innerText = heightWidth
}
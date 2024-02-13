'use strict'

function onBallClick(elBall){
    const maxDiameter = 400
    const rand = getRandomInt(20,61)
    let currSize = +elBall.style.width.slice(0,-2)
    if(currSize <= 100) currSize = 100
    if(currSize >= maxDiameter){
        elBall.style.width = '100px'
        elBall.style.height = '100px'
        elBall.innerText = 100
    } else {
        elBall.style.width = currSize + rand + 'px'
        elBall.style.height = currSize + rand + 'px'
        elBall.innerText = currSize + rand
    }
    elBall.style.backgroundColor = getRandomColor()
}

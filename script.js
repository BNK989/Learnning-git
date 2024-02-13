let heightWidth = 100

function onBallClick(elBall){
    heightWidth += 50
    elBall.style.width = heightWidth + 'px'
    elBall.style.height = heightWidth + 'px'
}
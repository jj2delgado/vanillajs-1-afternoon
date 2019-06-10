let score = []



function play(boxID){
    let playerSpan = document.getElementById('player')
    let box = document.getElementById(boxID)
    
    
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        box.innerText = 'X'
        score[boxID] = 'X'
    }
    else {
        playerSpan.innerText = 'X'
        box.innerText = 'O'
        score[boxID] = 'O'
    }
    let topLeft = score[0]
    let topMiddle = score[1]
    let topRight = score[2]
    let middleLeft = score[3]
    let center = score[4]
    let middleRight = score[5]
    let bottomLeft = score[6]
    let bottomMiddle = score[7]
    let bottomRight = score[8]
    console.log(score)
    console.log(topLeft)
    console.log(score.length)

        //horizontal wins
    if (topLeft !== undefined && topLeft === topMiddle && topMiddle === topRight){
        window.alert('Player ' + topLeft + ' is the winner!')
    }
    else if(middleLeft !== undefined && middleLeft === center && center === middleRight){
        window.alert('Player ' + middleLeft + ' is the winner!')
    }
    else if(bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomMiddle === bottomRight){
        window.alert('Player ' + bottomLeft + ' is the winner!')
    }
        //vertical wins
    else if(topLeft !== undefined && topLeft === middleLeft && middleLeft === bottomLeft){
        window.alert('Player ' + topLeft + ' is the winner!')
    }
    else if(topMiddle !== undefined && topMiddle === middleLeft && middleLeft === bottomLeft){
        window.alert('Player ' + topMiddle + ' is the winner!')
    }
    else if(topRight !== undefined && topRight === middleRight && middleRight === bottomRight){
        window.alert('Player ' + topRight + ' is the winner!')
    }
        //diagonal wins
    else if(topLeft !== undefined && topLeft === center && center === bottomRight){
        window.alert('Player ' + topLeft + ' is the winner!')
    }
    else if(topRight !== undefined && topRight === center && center === bottomLeft){
        window.alert('Player ' + topRight + ' is the winner!')
    }
    let boardFull = true

    for(let i = 0;i < 9; i++){
        if(score[i] === undefined){
            return boardFull = false
        }
    }
    if(boardFull){
        window.alert("This was a CATS game, no winner.")
    }
}
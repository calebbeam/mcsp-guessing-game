let myNum = 25
let guessCount = 0
let pastNums = ''
let userName;
let guessNum;

getName()
guess();
//do a new game function
//create an edge case for

function guess(){
    getNum()
        if(guessNum != myNum){
            if(guessNum > myNum){
                alert(`Sorry ${userName} guess lower!`)
                guess()
            } if(guessNum < myNum){
                alert(`Sorry ${userName} guess higher!`)
                guess()
            } 
        } else {
            alert(`Thats correct ${userName}! You only took ${guessCount} tries, your entries were ${pastNums}`)
    }
}

function getName(){
    userName = prompt('What is your name?')
}

function getNum(){
    guessNum = parseInt(prompt('guess a number'))
    guessCounter()
}

function guessCounter(){
    guessCount++
    pastNums += guessNum + ', '
}


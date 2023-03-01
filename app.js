let myNum = 25
let guessCount = 0
let pastNums = ''
let userName;
let guessNum;

getName()
guess();

function guess(){
    getNum()
        if(guessNum != myNum){
            if(guessNum > myNum){
                alert(`Sorry ${userName} guess lower!`)

            } if(guessNum < myNum){
                alert(`Sorry ${userName} guess higher!`)

            } 
            pastNums += ', '
            guess()
        } else if(guessNum == myNum){
            alert(`Thats correct ${userName}! You only took ${guessCount} tries, your entries were ${pastNums}`)
            if(prompt(`Would you like to play again ${userName}?`) == 'yes'){
                playAgain()
            } else{
                alert(`Thanks for playing ${userName}`)
        }
    }
}

function getName(){
    userName = prompt('What is your name?')
}

function getNum(){
    guessNum = parseInt(prompt('guess a number ' + userName))
    guessCounter()
}

function guessCounter(){
    guessCount++
    pastNums += guessNum 
}

function playAgain(){
    guessCount = 0
    pastNums = ''
    userName= ''
    guessNum;
    getName()
    guess()
}
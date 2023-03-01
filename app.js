let myNum = 25
let guessCount = 0
let pastNums = ''
let userName;
let guessNum;
var previousPlayers = {};

getName()
guess();

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

function saveUsers(){
    if(previousPlayers.hasOwnProperty(userName)){
        return previousPlayers[userName] - guessCount
    } else {
        previousPlayers[userName] = guessCount
    }
}

function playAgain(){
    guessCount = 0
    pastNums = ''
    userName= ''
    guessNum;
    getName()
    guess()
}

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
            if(saveUsers() > 0){
                alert(`Thats correct ${userName}! You only took ${guessCount} tries, beating your preivious attempt by ${saveUsers()}, your entries were ${pastNums}`)
            } else if (saveUsers() < 0){
                alert(`Thats correct ${userName}! You only took ${guessCount} tries, your preivious attempt was better by ${Math.abs(saveUsers())} attempts, your entries were ${pastNums}`)
            } else {
                alert(`Thats correct ${userName}! You only took ${guessCount} tries, your entries were ${pastNums}`)
            }
            if(prompt(`Would you like to play again ${userName}?`) == 'yes'){
                playAgain()
            } else{
                alert(`Thanks for playing ${userName}`)
        }
    }
    saveUsers()
}


console.log(previousPlayers['userName'])
//currently cannot get it to check the value at the userName to compare attemp counts
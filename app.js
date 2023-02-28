console.log('howdy partner')
let myNum = 25

function guess(){
    let guessNum = prompt('guess a number')
        if(guessNum < myNum){
            alert('higher')
        } else if (guessNum > myNum){
            alert('lower')
        } else if (guessNum == myNum){
            alert('Correct!')
    }
}
guess();


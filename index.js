//Elements
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")



//variable
let cards
let sum 

let isAlive = false
let hasBlackJack = false

function startGame(){
    isAlive = true
    sum = 0
    let firstCard = getCard()
    let  secondCard = getCard()
    cards = [firstCard,secondCard]
    renderGame()
     
    
}


function renderGame(){
    let message = ""
    sumEl.textContent = "Sum : "
    cardsEl.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
       sum += cards[i]
       cardsEl.textContent += cards[i] +" " 

    }

    if(sum===21){
        message = "You've won!"
        
    }else if(sum<21){
        message = "Draw new card!"
    }else{
        message = "you've lost"
        hasBlackJack = true
        isAlive = false
    }
    messageEl.textContent = message

    sumEl.textContent += sum
}

function drawNewCard(){
    if(isAlive===true){
         cards.push(getCard())
         renderGame()
    }

}

function getCard(){
    let number = Math.floor((Math.random()*13)+1)
    
    if(number === 1 || number >10){
        return 11
    }

    return number
 
}


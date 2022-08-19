let player = {
    name: "Goddy",
    chips: 784
} //Object - store data in-depth 
let cards = []; //array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");  querySelector can also be used instead of getElementBy
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; // 1 -13
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]; //array - ordered list of items
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
    message = "Do you want to draw a new card?";
}
else if (sum === 21) {
    message = "Wohoo! You've got a Blackjack!";
    hasBlackJack = true;
}
else {
    message = "Ooopppss! You're out of the game!";
    isAlive = false;
}
messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
    
}
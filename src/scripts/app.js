const emojis = [
    "🍕",
    "🍕",
    "🍿",
    "🍿",
    "🌭",
    "🌭",
    "🍔",
    "🍔",
    "🥚",
    "🥚",
    "🥐",
    "🥐",
    "🍞",
    "🍞",
    "🌮",
    "🌮"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1))

for(let i = 0; i < emojis.length; i++) {
    // cria um elemento html dinamicamente através de js
    let box = document.createElement("div");
    // atribui a classe item ao elemento que foi criado
    box.className = "item";
    // atribui um emoji para cada item
    box.innerHTML = shuffleEmojis[i];

    box.onclick = handleClick;
    // adiciona o elemento box no html
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    } 
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }

    console.log(openCards);
    
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Parabéns! Você venceu!");
        window.location.reload();
    }
    
}




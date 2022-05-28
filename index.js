let twitterBtn = document.getElementById("button-twitter")
let quote = document.getElementById("quote")
let author = document.getElementById("author")
let quoteText = document.querySelector(".quote-text")
let proximaBtn = document.getElementById("button-next")
let loader = document.getElementById("loader")
let quoteContainer = document.getElementById("quote-container")
let githubBtn = document.getElementById("button-github")
let instaBtn = document.getElementById("button-instagran")
let quotes;

function tweetConsole() {
    console.log("Voce clicou no botao")
}
function githubQuote() {
    window.open('https://github.com/Mathruu')
}
function instaQuote() {
    window.open('https://www.instagram.com/matheus_gomers/')
}
function tweetQuote() {
    window.open('https://twitter.com/intent/tweet?text=' + quote.textContent + "%0d - " + author.textContent, '_blank')
}

function Loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function onComplete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function newQuote() {
    Loading()
    let posicao = Math.floor(Math.random() * quotes.length);
    if (quotes[posicao].text.length > 100) {
        quote.classList.add("long-quote");
    } else {
        quote.classList.remove("long-quote");
    }
    quote.textContent = quotes[posicao].text;
    author.textContent = quotes[posicao].author;
    onComplete();
}

async function getQuotes() {
    Loading();
    let url = "https://6091dca585ff510017211b53.mockapi.io/Gerador";
    try {
        let response = await fetch(url);
        quotes = await response.json();
        newQuote();
    } catch (error) {
        quote.textContent = "Na minha mÃ¡quina funciona..."
        author.textContent = "Um programador"
        onComplete();
    }
}

twitterBtn.addEventListener("click", tweetQuote)
proximaBtn.addEventListener("click", getQuotes)
instaBtn.addEventListener("click", instaQuote)
githubBtn.addEventListener("click", githubQuote)
getQuotes();

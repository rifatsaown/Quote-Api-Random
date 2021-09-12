const getQuote = () =>{
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => showQuote(data))
}
const showQuote= data => {
   const quote= document.getElementById("quote")
   quote.innerText = data.content
}

const getQuote2 = () =>{
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => showQuote2(data))
}
const showQuote2= data => {
   const quote= document.getElementById("quote2")
   quote.innerText = data.quote
}
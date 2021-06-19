
let messageDiv = document.getElementById('today');

let affirmation = () => {
fetch("https://type.fit/api/quotes")
  
    .then((response) => {
    return response.json()
  })
  
    .then((data) => {
    
    const foundQuote = data[getRandom(0, 1643)];
    console.log(foundQuote)
    messageDiv.textContent = foundQuote.text + " - " + foundQuote.author

  });
}
affirmation()

function getRandom(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

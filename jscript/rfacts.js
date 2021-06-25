let messageDiv = document.getElementById('fact');
let rfact = () => {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")

    .then((response) => {
      
        return response.json();
      
    })
    .then(data => {
      
      const foundFact = data;
    console.log(foundFact)
    messageDiv.textContent = foundFact.text
    })
  }

  rfact()
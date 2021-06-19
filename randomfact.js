



      fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      console.log(data);
      displayFact(data)
    })
    // .catch((error) => console.error("FETCH ERROR:", error));

console.log(response)




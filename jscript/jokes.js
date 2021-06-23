// let button= document.getElementById("getJoke");
// let theJoke=document.getElementById("joke");

// button.addEventListener("click", printJoke)

let tellJoke=()=> {
    const jokeData = fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });
    const jokeObj = jokeData.json();
    jokeDiv.innerHTML = jokeObj.joke;
    console.log(jokeData);
  }
  


const button = document.getElementById("getJoke");
const jokeDiv = document.getElementById("joke");

document.addEventListener("DOMContentLoaded", tellJoke);

button.addEventListener("click", tellJoke);



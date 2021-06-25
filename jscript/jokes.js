// let button= document.getElementById("getJoke");
let theJoke=document.getElementById("joke");

// button.addEventListener("click", printJoke)

// fetch("https://dad-jokes.p.rapidapi.com/random/joke")
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);


const fetchPromise = fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eaa1f5f321msh29e8e62924108b7p133debjsnc1439027078c",
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
});

const getObj= (response => {
  return response.json()});

const logObj=(response => { console.log(response)})

const keyObj=(response=>{console.log(response.body)})


fetchPromise.then(getObj).then((data) => {
    
  const getJoke = data.body[0];
  console.log(getJoke)
  theJoke.textContent = getJoke.setup + " - " + getJoke.punchline

});

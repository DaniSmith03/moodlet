
let button= document.getElementById("getJoke");
let theJoke=document.getElementById("joke");
let punchline=document.getElementById("jokePunch")


const fetchPromise = fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eaa1f5f321msh29e8e62924108b7p133debjsnc1439027078c",
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
});

// const getObj= (response => {
//   return response.json()});

// const logObj=(response => { console.log(response)})

// const keyObj=(response=>{console.log(response.body)})


fetchPromise.then(response =>
	 response.json()).then((data) => {
    
  const getJoke = data.body[0];
  console.log(getJoke)
  theJoke.textContent = getJoke.setup
  button.onclick=function(){jokePunch.textContent=getJoke.punchline}
  

});









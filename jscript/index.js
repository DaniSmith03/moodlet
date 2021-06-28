let person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("yourName").innerHTML = person
    }



// -----Code to add "Back to Page top" button functionality----

const button=document.getElementById("toTop");
button.addEventListener("click",toTop);
function toTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


 
//--------------------Form Quiz Functionality---------------------

// function to calculate the result of the Quiz
let addAnswers=()=>{
  let a1score = 0;
  let a2score = 0;
  let a3score = 0;
 
  
  // get a list of the radio inputs on the page
  let choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'a1') {
        a1score = a1score + 1;
      }
      if (choices[i].value == 'a2') {
        a2score = a2score + 1;
      }
      if (choices[i].value == 'a3') {
        a3score = a3score + 1;
      }
      
    }
  }
  
 
  let maxscore = Math.max(a1score,a2score,a3score);
  
  // Display answer corresponding to that choice
  let formResult = document.getElementById("form-Result");
  if (a1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.

    formResult.innerHTML = "It seems you're feeling quite in alignment today! Ready to take on the day and get things done! In that case you should let fate decide and grab an affirmation to carry with you throughout the rest of your day!\n" ;

    let a = document.createElement('a');
    let linkText = document.createTextNode("Your Affirmation Here");
    a.appendChild(linkText);
    a.title = "my title text";
    a.href = "affirm.html";
    formResult.appendChild(a);
  }

  if (a2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    formResult.innerHTML = "Ah yes, an intellectual such as yourself is always in the mood for an extra tidbit of knowledge. On the other hand maybe you just enjoy loading up on random and sometimes useless facts. In either case, you would probably enjoy a random fact. \n";
    let a = document.createElement('a');
    let linkText = document.createTextNode("Your Fun Fact Here");
    a.appendChild(linkText);
    a.title = "my title text";
    a.href = "rfacts.html";
    formResult.appendChild(a);
  }

  
  if (a3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
    formResult.innerHTML = "Sounds like today is a chill day made just for slackers. Or just hard working people who wanna take life a little less serious at the moment. Grab a lame joke here! \n";
    let a = document.createElement('a');
    let linkText = document.createTextNode("Your Joke Here");
    a.appendChild(linkText);
    a.title = "my title text";
    a.href = "jokes.html";
    formResult.appendChild(a);
  }
  
}

// program the reset button
function resetAnswer() {
  let answerbox = document.getElementById("form-Result");
  answerbox.innerHTML = "Your result will show up here!";
}


//--------------------Form Quiz Functionality---------------------
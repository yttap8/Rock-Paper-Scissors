//Global variables that are accessed in several functions. Empty strings to start.
var result = "";
var p1 = "";
var p2 = "";
var message = "";

//Function that randomly generates rock, paper or scissors. Works by generating random number corresponding to array value
var options = ["rock", "paper", "scissors"]
function randomRps(){
  var num = Math.floor(Math.random()*3);
  return options[num];
}

//big function that plays the game. takes p1 as the input from user, and p2 from the random generator. p2 is the computer.
//compares p1 and p2 to determine result.
function play(){
  p2 = randomRps();
  if (p1 == "rock" && p2=="rock"){
    result = "It's a tie";
  }else if (p1 == "paper" && p2=="paper"){
    result = "It's a tie";
  }else if (p1 == "scissors" && p2=="scissors"){
    result = "It's a tie";
  }else if (p1 == "rock" && p2=="paper"){
    result = "You lost.";
  }else if (p1 == "rock" && p2=="scissors"){
    result = "You won!";
  }else if (p1 == "scissors" && p2=="rock"){
    result = "You lost.";
  }else if (p1 == "scissors" && p2=="paper"){
    result = "You won!";
  }else if (p1 == "paper" && p2=="rock"){
    result = "You won!";
  }else if (p1 == "paper" && p2=="scissors"){
    result = "You lost.";
  }
}

//message displayer for RPS game. runs the play function which determines game outcome.
//takes new values for p1, p2, and result and displays them as a full string sentence in corresponding html element.
function displayMessage(){
   p1 = document.getElementById('rps').value;
   play();
   message = "Computer: " + p2 + ". " + result;
   document.getElementById("message1").innerHTML = message;
}

//message displayer for MJP scissors game. similar to RPS message function, except it converts rock, paper and scissors to muk, jji, and ppa.
function displayMJP(){
  p1 = document.getElementById('mjp').value;
  play();
  var mjp = "";
  if (p2 == "rock"){
    mjp = "Muk";
  }else if (p2 == "paper"){
    mjp = "Ppa";
  }else if (p2 == "scissors"){
    mjp = "Jji";
  }
  message = "Computer: " + mjp + ". " + result;
  document.getElementById("message2").innerHTML = message;
}

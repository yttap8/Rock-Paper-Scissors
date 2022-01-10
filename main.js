
var options = ["rock", "paper", "scissors"]
var result = "";
var p1 = "";
var p2 = "";
var message = "";

function randomRps(){
  var num = Math.floor(Math.random()*3);
  return options[num];
}

function play(){
  p1 = document.getElementById('rps').value;
  p2 = randomRps();
  if (p1 == "rock" && p2=="rock"){
    result = "tie";
  }else if (p1 == "paper" && p2=="paper"){
    result = "tie";
  }else if (p1 == "scissors" && p2=="scissors"){
    result = "tie";
  }else if (p1 == "rock" && p2=="paper"){
    result = "player 2 wins";
  }else if (p1 == "rock" && p2=="scissors"){
    result = "player 1 wins";
  }else if (p1 == "scissors" && p2=="rock"){
    result = "player 2 wins";
  }else if (p1 == "scissors" && p2=="paper"){
    result = "player 1 wins";
  }else if (p1 == "paper" && p2=="rock"){
    result = "player 1 wins";
  }else if (p1 == "paper" && p2=="scissors"){
    result = "player 2 wins";
  }
}

function displayMJP(){
  play();
  var mjp = "";
  if (p2 == "rock"){
    mjp = "muk";
  }else if (p2 == "paper"){
    mjp = "ppa";
  }else if (p2 == "scissors"){
    mjp = "jji";
  }
  message = "Computer: " + mjp + ", " + result;
  document.getElementById("message").innerHTML = message;
}

function displayMessage(){
   play();
   message = "Player 1: " + p1 +", Player 2: " + p2 + ", " + result;
   document.getElementById("message").innerHTML = message;
}

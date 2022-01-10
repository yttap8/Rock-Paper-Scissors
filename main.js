
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

function displayMessage(){
   play();
   message = "Computer: " + p2 + ". " + result;
   document.getElementById("message1").innerHTML = message;
}

function displayMJP(){
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

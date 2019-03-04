

var player1="";
var player2="";



var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}


function Player(turn){
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollone = function(){
  if(this.roll === 1){
    this.timescore = 0;
    alert("Your Turn is Over " + this.playerName + ", you rolled a 1!!" );
  }else{
    this.tempscore += this.roll;
  }
}

Player.prototype.hold = function(){
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + ", Your Turn is Over, Pass the Mouse");
}


Player.prototype.winnerCheck = function(){
  if(this.totalscore >= 100){
    alert(this.playerName + " Won this Round!");
  }
}


var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}


$(document).ready(function(){
  $("button#start").click(function(event){
    player1 = new Player();
    player2 = new Player();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name
  });


  $("button#new-game").click(function(event){
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-score-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-score-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();
  });


  $("button#roll-die-button-1").click(function(event){
    player1.roll = throwdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-score-1").text(player1.tempscore);
  });

  $("button#roll-die-button-2").click(function(event){
    player2.roll = throwdice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-score-2").text(player2.tempscore);
  });

  $("button#hold-button-1").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#hold-button-2").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-score-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

})

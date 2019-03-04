

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

$(document).ready(function() {

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
    alert(this.playerName + ", Your Turn is Over");
  }



}



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

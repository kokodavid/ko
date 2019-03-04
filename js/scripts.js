
var player2="";
var player1="";




var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}


function Player(turn){
  this.throw = 0;
  this.score = 0;
  this.totalscore = 0;
  this.next = next;
  this.playerName;
}

Player.prototype.rollone = function(){
  if(this.throw === 1){
    this.score = 0;
    alert("Your Turn is Over " + this.playerName + ", you rolled a 1!!" );
  }else{
    this.score += this.roll;
  }
}

Player.prototype.hold = function(){
  this.totalscore += this.score;
  this.score = 0;
  alert(this.playerName + ", Your Turn is Over, Pass the Mouse");
}


Player.prototype.winnerCheck = function(){
  if(this.totalscore >= 100){
    alert(this.playerName + " Won this Round!");
  }
}


var clearValues = function(){
  $(".player2Name").val("");
  $(".player1Name").val("");

}




  $("button#roll-die-button-2").click(function(event){
    player2.roll = throwdice();
    $("#die-roll-2").text(player2.throw);
    player2.rollone();
    $("#round-score-2").text(player2.score);
  });


  $("button#roll-die-button-1").click(function(event){
    player1.throw = throwdice();
    $("#die-roll-1").text(player1.throw);
    player1.rollone();
    $("#round-score-1").text(player1.score);
  });

  $("button#hold-button-2").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-score-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });


  $("button#hold-button-1").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });


})

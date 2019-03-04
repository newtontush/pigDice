var player1="";
var player2="";
var dice = function () {
    return Math.floor(6*Math.random())+1;
}
function player(turn) {
    this.roll=  0;
    this.temposcore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playerName;
}
player.prototype.roll = function() {
    if(this.roll === 1) {
        this.temposcore = 0;
        alert(this.playerName + "'" + "You rolled a 1!!!!");
    }else{
        this.temposcore += this.roll;
    }
}
player.prototype.hold = function() {
    this.totalscore += this.temposcore;
    this.temposcore = 0;
    alert(this.playerName + "your turn is over!");
}
player.prototype.winner = function() {
    if(this.totalscore >= 100) {
        alert(this.playername + "won  this round!");
    }
}
var clearValues = function() {
    $(.)
}


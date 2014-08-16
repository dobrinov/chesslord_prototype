function Game(options) {
  this.board = options.board;
  this.players = options.players;
}

Game.prototype.start = function(){
  var self = this;

  if(this.board.teams.length < this.players.length){
    console.error('Too much players for this board.'); return;
  }

  for(var i=0; i<self.players.length; i++){
    // Add the players to the board
    self.board.addPlayer(self.players[i]);

    // Place the kings of the players;
    self.players[i].placeKing();
  }

}

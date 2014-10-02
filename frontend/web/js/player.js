function Player(options){
  this.name = options.name;

  this.pieces = [];
}

Player.prototype.placeKing = function(){
  var self = this;

  if(!self.board){
    console.error('This player has not joined a board.'); return;
  }

  // Get coordinates from backend (stubbed)
  var row = Math.floor((Math.random() * self.board.rows));
  var col = Math.floor((Math.random() * self.board.cols));
  var piece = this.spawnPiece(Queen);

  if(self.board.isBlockFree(row,col)){
    self.board.placePiece(piece,row,col);
  } else {
    self.placeKing();
  }
}

Player.prototype.spawnPiece = function(pieceType){
  var piece = new pieceType(this);

  this.pieces.push(piece);

  return piece;
}

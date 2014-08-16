function Player(options){
  this.name = options.name;

  this.pieces = [];
}

Player.prototype.placeKing = function(){
  var self = this;

  if(!self.board){
    console.error('This player has not joined a board.'); return;
  }

  // Get coordinates from backend;
  // STUB:
  var row = Math.floor((Math.random() * self.board.rows));
  var col = Math.floor((Math.random() * self.board.cols));
  var piece = this.spawnPiece(King);

  this.board.placePiece(piece,row,col);
}

Player.prototype.spawnPiece = function(pieceType){
  var piece = new pieceType();

  piece.player = this;
  this.pieces.push(piece);

  return piece;
}

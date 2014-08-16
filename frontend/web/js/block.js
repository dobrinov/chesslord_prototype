function Block(row, col, color, board){
  this.board = board;
  this.color = color;
  this.row = row;
  this.col = col;
  this.width = this.board.width / this.board.cols;
  this.height = this.board.width / this.board.cols;
  this.piece = null;
}

Block.prototype.draw = function(){
  this.html = $(document.createElement('div'))
                .addClass('board__block board__block_' + this.color)
                .css('width', this.width)
                .css('height', this.width);

  if(this.piece){
    this.html.html(this.piece.draw());
  }

  return this.html;
}

Block.prototype.addPiece = function(piece){
  var self = this;

  if(self.piece){
    return false;
  } else {
    self.piece = piece;
    return true;
  }

}

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
  var self = this;
  this.html = $(document.createElement('div'))
                .addClass('board__block board__block_' + this.color)
                .attr('data-row', this.row)
                .attr('data-col', this.col)
                .css('width', this.width)
                .css('height', this.width);

  if(this.piece){
    this.html.html(this.piece.draw());
  } else {
    self.html.html('');
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

Block.prototype.placePiece = function(piece){
  this.piece = piece;
  piece.block = this;

  this.html.html(piece.html);

  setTimeout(function(){
    piece.makeDraggable();
  },1);
}

Block.prototype.removePiece = function(){
  this.piece = undefined;
  this.html.html('');
}

Block.prototype.markAsPossibleMove = function(){
  $(this.html).addClass('board__block_possible-move');
}

Block.prototype.unmarkAsPossibleMove = function(){
  $(this.html).removeClass('board__block_possible-move');
}

function Block(row, col, color, board){
  this.board = board;
  this.color = color;
  this.row = row;
  this.col = col;
  this.width = this.board.width / this.board.cols;
  this.height = this.board.width / this.board.cols;
  this.piece = null;

  this.draw();
}

Block.prototype.draw = function(){
  this.element =  $(document.createElement('div'))
                    .addClass('board__block board__block_' + this.color)
                    .attr('data-row', this.row)
                    .attr('data-col', this.col)
                    .css('width', this.width)
                    .css('height', this.width);
}

Block.prototype.placePiece = function(piece){
  this.piece = piece;
  piece.block = this;

  this.element.html(piece.element);
}

Block.prototype.removePiece = function(){
  this.piece.block = undefined;
  this.piece = undefined;

  this.element.html('');
}

Block.prototype.markAsPossibleMove = function(){
  $(this.element).addClass('board__block_possible-move');
}

Block.prototype.unmarkAsPossibleMove = function(){
  $(this.element).removeClass('board__block_possible-move');
}

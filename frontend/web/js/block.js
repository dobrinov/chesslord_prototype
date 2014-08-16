function Block(row, col, color, board){
  this.board = board;
  this.color = color;
  this.row = row;
  this.col = col;
  this.width = this.board.width / this.board.cols;
  this.height = this.board.width / this.board.cols;
}

Block.prototype.draw = function(){
  return  $(document.createElement('div'))
            .addClass('board__block board__block_' + this.color)
            .css('width', this.width)
            .css('height', this.width);
}

function Board(options){
  this.rows  = options.rows;
  this.cols  = options.cols;
  this.width = options.size;

  this.players = [];
  this.pieces  = [];

  this.teams = ['white', 'black', 'red', 'blue'];

  this.field = new Array();

  // Add blocks to the board;
  for(var i=0; i<this.rows; i++){
    var row = new Array();

    for(var j=0; j<this.cols; j++){
      var color = this.colorForPosition(i,j);
      row.push(new Block(i,j,color,this));
    }

    this.field.push(row);
  }

  // Draw the board;
  this.draw();
}

Board.prototype.draw = function(){
  this.element =  $(document.createElement('div'))
                    .addClass('board')
                    .css('width',this.width);

  for(var i=0; i<this.rows; i++){
    for(var j=0; j<this.cols; j++){
      this.element.append(this.field[i][j].element);
    }
  }
}

Board.prototype.movePiece = function(piece, from, to){
}

Board.prototype.markPossibleBlocksFor = function(piece){
  var self = this;
  var possibleMoves = piece.possibleMoves;

  for(var i=0; i<possibleMoves.length; i++){
    var possibleLocations = possibleMoves[i].possibleLocations;

    for(var j=0; j<possibleLocations.length; j++){
      var row = piece.block.row + possibleLocations[j].y;
      var col = piece.block.col + possibleLocations[j].x;

      // If location out of the board;
      if(row < 0 || col < 0 || row >= self.rows || col >= self.cols){
        break; // ignore successor move locations;
      }

      self.field[row][col].markAsPossibleMove();

      // If another piece in way
      if(self.field[row][col].piece !== null){
        break; // ignore successor move locations;
      }

    }
  }
}

Board.prototype.unmarkPossibleBlocks = function(piece){
  this.element.find('.board__block').removeClass('board__block_possible-move');
}

Board.prototype.colorForPosition = function(row,col){
  if(row%2==0){
    color = col%2==0 ? 'dark' : 'light';
  } else {
    color = col%2==0 ? 'light' : 'dark';
  }

  return color;
}

Board.prototype.addPlayer = function(player){
  player.team = this.teams[this.players.length];
  player.board = this;
  this.players.push(player);
}

Board.prototype.isBlockFree = function(row,col){
  return this.field[row][col].piece == undefined
}

Board.prototype.placePiece = function(piece, row, col){
  this.field[row][col].placePiece(piece);
  piece.board = this;

  this.pieces.push(piece);
}

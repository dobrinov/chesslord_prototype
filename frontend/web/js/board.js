function Board(options){
  this.rows  = options.rows;
  this.cols  = options.cols;
  this.width = options.size;

  this.players = [];
  this.pieces  = [];

  this.teams = ['white', 'black', 'red', 'blue'];

  this.init();
}

Board.prototype.init = function(){
  var self = this;

  self.field = new Array();

  for(var i=0; i<self.rows; i++){
    var row = new Array();

    for(var j=0; j<self.cols; j++){
      var color = self.colorForPosition(i,j);
      row.push(new Block(i,j,color,self));
    }

    self.field.push(row);
  }
}

Board.prototype.draw = function(){
  var self = this;

  self.html = $(document.createElement('div')).addClass('board').css('width',self.width);

  for(var i=0; i<self.rows; i++){
    for(var j=0; j<self.cols; j++){
      self.html.append(self.field[i][j].draw());
    }
  }

  return self.html;
}

Board.prototype.redraw = function(){
  return this.draw;
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

Board.prototype.placePiece = function(piece, row, col){
  piece.board = this;
  piece.row   = row;
  piece.col   = col;

  this.field[row][col].piece = piece;
}

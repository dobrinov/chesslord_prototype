function Piece(player){
  this.player = player;
  this.draw();
  this.makeDraggable();
}

Piece.prototype.draw = function(){
  this.element =  $(document.createElement('span'))
                    .addClass('piece')
                    .addClass('piece_' + this.player.team)
                    .html(this.sign);
}

Piece.prototype.makeDraggable = function(){
  var self = this;

  self.element.draggable({
    opacity: 0.5,
    helper: "clone",
    start: function(e) {
      self.board.markPossibleBlocksFor(self);
    },
    drag: function(e) {
    },
    stop: function(e, ui) {
      self.board.unmarkPossibleBlocks(self);
      self.block.removePiece();

      var destinationBlockElement = $(document.elementFromPoint(e.clientX,e.clientY)).closest('.board__block');
      var destinationBlock = self.board.field[destinationBlockElement.data('row')][destinationBlockElement.data('col')];

      destinationBlock.placePiece(self);

      setTimeout(function(){
        self.makeDraggable();
      },1);
    }
  });
}

Piece.prototype.possibleLocations = function(){
  var possibleLocations = [];

  for(var i=0; i<this.possibleMoves.length; i++){
    for(var j=0; j<this.possibleMoves[i].possibleLocations.length; j++){
      possibleLocations.push(this.possibleMoves[i].possibleLocations[j]);
    }
  }

  return possibleLocations;
}

// KING

function King(player){
  this.sign = '&#9818;';

  this.possibleMoves = [
    new HorizontalMove(1),
    new VerticalMove(1),
    new DiagonalMove(1)
  ];

  Piece.call(this, player);
}

King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;

// QUEEN

function Queen(player){
  this.sign = '&#9819;';

  this.possibleMoves = [
    new HorizontalMove(4),
    new VerticalMove(4),
    new DiagonalMove(4)
  ];

  Piece.call(this, player);
}

Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

// ROOK

function Rook(player){
  this.sign = '&#9820;';

  this.possibleMoves = [
    new HorizontalMove(4),
    new VerticalMove(4)
  ];

  Piece.call(this, player);
}

Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;

// BISHOP

function Bishop(player){
  this.sign = '&#9821;';

  this.possibleMoves = [
    new DiagonalMove(4)
  ];

  Piece.call(this, player);
}

Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

// KNIGHT

function Knight(player){
  this.sign = '&#9822;';

  this.possibleMoves = [
    new KnightMove()
  ];

  Piece.call(this, player);
}

Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;

// PAWN

function Pawn(player){
  this.sign = '&#9823;';

  this.possibleMoves = [
    new HorizontalMove(1),
    new VerticalMove(1)
  ];

  Piece.call(this, player);
}

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

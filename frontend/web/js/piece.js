function Piece(){
  this.possibleMoves = [];
}

Piece.prototype.draw = function(){
  this.html = $(document.createElement('span'))
                .addClass('piece')
                .addClass('piece_' + this.player.team)
                .html(this.sign);

  this.makeDraggable();

  return this.html;
}

Piece.prototype.makeDraggable = function(){
  this.html.draggable({
    opacity: 0.5,
    helper: "clone",
    start: function(e) {
    },
    drag: function(e) {
    },
    stop: function(e) {

      setTimeout(function(){
        $(document.elementFromPoint(e.clientX,e.clientY))
          .closest('.board__block')
          .html(e.target);
      }, 1);

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

function King(){
  Piece.call(this);
  this.sign = '&#9818;';

  this.possibleMoves = [
    new HorizontalMove(1),
    new VerticalMove(1),
    new DiagonalMove(1)
  ];
}

King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;

// QUEEN

function Queen(){
  Piece.call(this);
  this.sign = '&#9819;';

  this.possibleMoves = [
    new HorizontalMove(8),
    new VerticalMove(8),
    new DiagonalMove(8)
  ];
}

Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

// ROOK

function Rook(){
  Piece.call(this);
  this.sign = '&#9820;';

  this.possibleMoves = [
    new HorizontalMove(8),
    new VerticalMove(8)
  ];
}

Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;

// BISHOP

function Bishop(){
  Piece.call(this);
  this.sign = '&#9821;';

  this.possibleMoves = [
    new DiagonalMove(8)
  ];
}

Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

// KNIGHT

function Knight(){
  Piece.call(this);
  this.sign = '&#9822;';

  this.possibleMoves = [
    new KnightMove()
  ];
}

Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;

// PAWN

function Pawn(){
  Piece.call(this);
  this.sign = '&#9823;';

  this.possibleMoves = [
    new HorizontalMove(1),
    new VerticalMove(1)
  ];
}

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

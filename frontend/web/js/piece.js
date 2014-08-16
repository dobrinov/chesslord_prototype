function Piece(){
}

Piece.prototype.draw =  function(){
  $(document.createElement('span')).addClass('piece');
}

// KING

function King(){
  Piece.call(this);
  $(this.html).html('&#9818;');
}

King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;

// QUEEN

function Queen(){
  Piece.call(this);
  $(this.html).html('&#9819;');
}

Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

// ROOK

function Rook(){
  Piece.call(this);
  $(this.html).html('&#9820;');
}

Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;

// BISHOP

function Bishop(){
  Piece.call(this);
  $(this.html).html('&#9821;');
}

Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

// KNIGHT

function Knight(){
  Piece.call(this);
  $(this.html).html('&#9822;');
}

Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;

// PAWN

function Pawn(){
  Piece.call(this);
  $(this.html).html('&#9823;');
}

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

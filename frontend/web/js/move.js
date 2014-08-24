function Move(length){
  this.length = length;
  this.possibleLocations = [];
}

// Horizontal move
function HorizontalMove(length){
  Move.call(this, length);

  for(var i=1; i<=length; i++){
    this.possibleLocations.push({x: i, y:0});
    this.possibleLocations.push({x:-i, y:0});
  }
}

// Vertical move
function VerticalMove(length){
  Move.call(this, length);

  for(var i=1; i<=length; i++){
    this.possibleLocations.push({x: 0, y: i});
    this.possibleLocations.push({x: 0, y:-i});
  }
}

// Diagonal move
function DiagonalMove(length){
  Move.call(this, length);

  for(var i=1; i<=length; i++){
    this.possibleLocations.push({x: i, y: i});
    this.possibleLocations.push({x: i, y:-i});
    this.possibleLocations.push({x:-i, y: i});
    this.possibleLocations.push({x:-i, y:-i});
  }
}

// Vertical move
function KnightMove(){
  Move.call(this);

  this.possibleLocations.push({x: 1, y: 2});
  this.possibleLocations.push({x:-1, y: 2});
  this.possibleLocations.push({x: 1, y:-2});
  this.possibleLocations.push({x:-1, y:-2});

  this.possibleLocations.push({x: 2, y: 1});
  this.possibleLocations.push({x: 2, y:-1});
  this.possibleLocations.push({x:-2, y: 1});
  this.possibleLocations.push({x:-2, y:-1});
}

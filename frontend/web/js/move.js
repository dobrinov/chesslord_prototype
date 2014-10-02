function Move(length){
  this.length = length;
  this.possibleLocations = [];
}

// Horizontal move
function HorizontalMove(length, direction){
  Move.call(this, length);

  var x_modifier;

  switch(direction){
    case "w": x_modifier = -1; break;
    case "e": x_modifier =  1; break;
    default:  // Do nothing;
  }

  for(var i=1; i<=length; i++){
    this.possibleLocations.push({x: x_modifier * i, y:0});
  }
}

// Vertical move
function VerticalMove(length, direction){
  Move.call(this, length);

  var y_modifier;

  switch(direction){
    case "n": y_modifier = -1; break;
    case "s": y_modifier =  1; break;
    default:  // Do nothing;
  }

  for(var i=1; i<=length; i++){
    this.possibleLocations.push({x: 0, y: y_modifier * i});
  }
}

// Diagonal move
function DiagonalMove(length, direction){
  Move.call(this, length);

  var x_modifier;
  var y_modifier;

  switch(direction){
    case "ne": x_modifier =  1; y_modifier = -1; break;
    case "nw": x_modifier = -1; y_modifier = -1; break;
    case "sw": x_modifier = -1; y_modifier =  1; break;
    case "se": x_modifier =  1; y_modifier =  1; break;
    default:  // Do nothing;
  }

  for(var i=1; i<=length; i++){
    this.possibleLocations.push({x: x_modifier * i, y: y_modifier * i});
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

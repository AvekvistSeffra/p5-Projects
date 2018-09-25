function Piece(x, y, type, colour) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.colour = colour;

    this.CheckViableMoves = function() {}
    this.DrawViableMoves = function() {}

    this.Move = function(x, y) {
        var viableMoves = CheckViableMoves();
        for(var i = 0; i < viableMoves.length; i++) {
            if(x == viableMoves[i].x && y == viableMoves[i].y) {
                this.x = x;
                this.y = y;
            }
        }
    }
}

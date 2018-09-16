function Vector(x, y) {
    this.x = x;
    this.y = y;

    this.Add = function(other) {
        this.x += other.x;
        this.y += other.y;
    }
}

function Ellipse(x, y, width, height, colour) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.width = width;
    this.height = height;
    this.colour = colour;

    this.Draw = function() {
        fill(this.colour);
        ellipse(this.position.x, this.position.y, this.width, this.height);
    }

    this.Accelerate = function(acceleration) {
        this.velocity.Add(acceleration);
    }

    this.Move = function() {
        this.position.Add(this.velocity);
    }

    this.SetX = function(x) {
        this.x = x;
    }

    this.SetY = function(y) {
        this.y = y;
    }
}

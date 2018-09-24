function Cell(x, y) {
    this.x = x;
    this.y = y;

    this.alive = true;

    this.scale = 1;

    this.SetScale = function(scale) {
        this.scale = scale;
    }

    this.Draw = function() {
        fill(80);
        rect(this.x * scale, this.y * scale, scale, scale);
    }
}

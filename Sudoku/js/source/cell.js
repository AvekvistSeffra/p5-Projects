function Cell(x, y, number) {
    this.x = x;
    this.y = y;
    this.number = number;
    
    this.scale = 1;

    this.baseNumber = false;

    this.SetScale = function(scale) {
        this.scale = scale;
    }

    this.Draw = function() {
        noStroke();
        fill(255);
        if(this.baseNumber)
            fill(220);
        if(this.number > 0) {
            rect(x * this.scale + 1, y * this.scale + 1, this.scale - 1, this.scale - 1);
            fill(16);
            textSize(28);
            textAlign(CENTER, CENTER);
            text(this.number, this.x * this.scale + 1, this.y * this.scale + 1, this.scale + 4, this.scale + 2);
        }
    }
}

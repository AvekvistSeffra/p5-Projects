function Button(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.text = "";
    this.textSize = 18;

    this.hovered = false;

    this.Draw = function() {
        this.Hover();
        noStroke();

        fill(64);
        rect(this.x, this.y, this.width, this.height);
        fill(255);
        textSize(this.textSize);
        textAlign(CENTER, CENTER);
        text(this.text, this.x, this.y, this.width, this.height);
    }

    this.OnClick = function() {}

    this.Hover = function() {
        if(mouseX > this.x && mouseY > this.y) {
            if(mouseX < this.x + this.width && mouseY < this.y + this.height) {
                this.backgroundColour = 48;
                cursor(HAND);
                this.hovered = true;

                return;
            }
        }

        this.backgroundColour = 64;
        this.hovered = false;
    }
}

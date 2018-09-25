function Button(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.text = "";
    this.textSize = 18;

    this.hovered = false;

    this.backgroundColour = 96;

    this.Draw = function() {
        this.Hover();
        noStroke();

        fill(this.backgroundColour);
        rect(this.x + 1, this.y + 1, this.width - 1, this.height - 1);
        fill(255);
        textSize(this.textSize);
        textAlign(CENTER, CENTER);
        text(this.text, this.x + 1, this.y + 1, this.width - 1, this.height - 1);
    }

    this.OnClick = function() {}

    this.Hover = function() {
        if(mouseX > this.x && mouseY > this.y) {
            if(mouseX < this.x + this.width && mouseY < this.y + this.height) {
                this.backgroundColour = 64;
                cursor(HAND);
                this.hovered = true;

                return;
            }
        }

        this.backgroundColour = 96;
        this.hovered = false;
    }
}

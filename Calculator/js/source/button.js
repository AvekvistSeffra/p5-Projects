function Button(x, y, width, height, textData) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = textData;

    this.baseTextSize = 18;
    this.textSize = this.baseTextSize;

    this.colour = 255;
    this.backgroundColour = 64;

    this.SetTextSize = function(x) {
        this.textSize = x;
    }

    this.Draw = function () {
        this.Hover();
        noStroke();
        fill(this.backgroundColour);
        rect(this.x, this.y, this.width, this.height);

        textSize(this.textSize);
        textAlign(CENTER, CENTER);
        fill(this.colour);
        text(this.text, this.x, this.y, this.width, this.height);
    }

    this.Hover = function() {
        if(mouseX > this.x && mouseY > this.y) {
            if(mouseX < this.x + this.width && mouseY < this.y + this.height) {
                this.backgroundColour = 48;
                cursor(HAND);
                if(mouseIsPressed) {
                    this.OnClick();
                }

                return;
            }
        }

        this.backgroundColour = 64;
    }

    this.OnClick = function() {}
}

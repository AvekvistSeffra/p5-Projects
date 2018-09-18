function Button(x, y, width, height, textData) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = textData;

    this.colour = 255;
    this.backgroundColour = 64;

    this.Draw = function () {
        fill(this.backgroundColour);
        rect(this.x, this.y, this.width, this.height);

        textSize(24);
        textAlign(CENTER);
        fill(this.colour);
        text(this.text, this.x, this.y, this.width, this.height);
    }
}

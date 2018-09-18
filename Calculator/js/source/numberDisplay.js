function NumberDisplay(x, y, width, height, textData) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = textData;

    this.Draw = function() {
        textSize(24);
        textAlign(RIGHT);
        text(this.text, this.x, this.y, this.width, this.height);
    }
}

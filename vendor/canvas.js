function Canvas(width, height) {
    this.width = width;
    this.height = height;
    this.backgroundColour = 255;

    this.canvas = createCanvas(this.width, this.height);
    this.canvas.parent('sketch');

    background(this.backgroundColour);
    frameRate(60);

    this.SetFramerate = function(framerate) {
        frameRate(framerate);
    }

    this.SetBackgroundColour = function(colour) {
        this.backgroundColour = colour;
        background(colour);
    }

    this.SetParent = function(parent) {
        this.canvas.parent(parent);
    }

    this.ClearScreen = function() {
        clear();
        background(this.backgroundColour);
    }
}

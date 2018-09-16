function Canvas(width, height, backgroundColour) {
    this.width = width;
    this.height = height;
    this.backgroundColour = backgroundColour;

    this.canvas = createCanvas(this.width, this.height);

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

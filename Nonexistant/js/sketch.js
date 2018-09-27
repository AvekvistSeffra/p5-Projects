var canvas;

var scale;

var vectors;

function setup() {
    canvas = new Canvas(640, 360);
    canvas.SetFramerate(10);
    scale = 20;

    vectors = [];

    for(var x = 0; x < width / scale; x++) {
        var y = noise(x);
        vectors[x] = [x, y];
    }
}

function DrawGrid() {
    stroke(220);
    for(var i = 0; i < width; i += scale) {
        line(i, 0, i, height);
    }

    for(var j = 0; j < height; j += scale) {
        line(0, j, width, j);
    }

    stroke(160);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
}

var xOffset = 0;
var yOffset = 0;

function draw() {
    canvas.ClearScreen();
    DrawGrid();

    fill(0);
    noStroke();
    
    for(var i = 0; i < vectors.length; i++) {
        rect(vectors[i].x * scale, vectors[i].y, scale, scale);
    }
}

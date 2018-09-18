var canvas;

var testButton;
var zeroButton;
var numberDisplay;

function setup() {
    canvas = new Canvas(640, 320);
    numberDisplay = new NumberDisplay(0, 0, width, 40, 5);
    testButton = new Button(0, height - 80, 64, 32, "1");
    zeroButton = new Button(0, height - 48, 160, 48, "0");
}

function draw() {
    numberDisplay.Draw();
    testButton.Draw();
    zeroButton.Draw();
}

var canvas;

var sketchDiv;
var width, height;

var numberDisplay;
var zeroButton, clearButton;
var addButton, subtractButton, multiplyButton, divideButton;
var equalsButton;

var oneButton, twoButton, threeButton;
var fourButton, fiveButton, sixButton;
var sevenButton, eightButton, nineButton;

function Add() {
    numberDisplay.value1 = numberDisplay.text;
    numberDisplay.text = 0;

    numberDisplay.operation = 1;
}

function Subtract() {
    numberDisplay.value1 = numberDisplay.text;
    numberDisplay.text = 0;

    numberDisplay.operation = 2;
}

function Multiply() {
    numberDisplay.value1 = numberDisplay.text;
    numberDisplay.text = 0;

    numberDisplay.operation = 3;
}

function Divide() {
    numberDisplay.value1 = numberDisplay.text;
    numberDisplay.text = 0;
    
    numberDisplay.operation = 4;
}

function Equals() {
    switch(numberDisplay.operation) {
        case 1:
            numberDisplay.value2 = Number(numberDisplay.text);
            numberDisplay.text = numberDisplay.value1 + numberDisplay.value2;
            break;
        case 2:
            numberDisplay.value2 = Number(numberDisplay.text);
            if(numberDisplay.value1 === 0 || numberDisplay.value2 === 0) {
                numberDisplay.text = 0;
                break;
            }

            numberDisplay.text = numberDisplay.value1 - numberDisplay.value2;
            break;
        case 3:
            numberDisplay.value2 = Number(numberDisplay.text);
            if(numberDisplay.value2 === 0) {
                numberDisplay.text = "Error: Undefined";
                break;
            }

            numberDisplay.text = numberDisplay.value1 * numberDisplay.value2;
            break;
        case 4:
            numberDisplay.value2 = Number(numberDisplay.text);
            numberDisplay.text = numberDisplay.value1 / numberDisplay.value2;
            break;
        default:
            break;
    }

    numberDisplay.operation = 0;
    numberDisplay.operationFinished = true;
}

function Clear() {
    numberDisplay.text = 0;
    numberDisplay.value1 = 0;
    numberDisplay.value2 = 0;
    numberDisplay.operationFinished = false;
}

function AppendValue(x) {
    var value = Number(numberDisplay.text);
    if(numberDisplay.operationFinished) {
        numberDisplay.text = value;
        numberDisplay.operationFinished = false;
        return;
    }

    value *= 10;
    value += x;
    if(value < numberDisplay.maxSize)
        numberDisplay.text = value;
}

function Resize() {
    width = sketchDiv.offsetWidth - 100;
    height = (width / 48) * 31;
    
    resizeCanvas(width, height);

    var widthScaleFactor = width / 240;
    var heightScaleFactor = widthScaleFactor;

    var firstColumn = 60 * 0 * widthScaleFactor;
    var secondColumn = 60 * 1 * widthScaleFactor;
    var thirdColumn = 60 * 2 * widthScaleFactor;
    var fourthColumn = 60 * 3 * widthScaleFactor;

    var firstRow = height - 32 * heightScaleFactor;
    var secondRow = height - 64 * heightScaleFactor - 32 * 0 * heightScaleFactor;
    var thirdRow = height - 64 * heightScaleFactor - 32 * 1 * heightScaleFactor;
    var fourthRow = height - 64 * heightScaleFactor - 32 * 2 * heightScaleFactor;

    var buttonWidth = 60 * widthScaleFactor, buttonHeight = 32 * heightScaleFactor;

    canvas.width = width;
    canvas.height = height;

    numberDisplay.width = width;
    numberDisplay.height = 28 * heightScaleFactor;
    
    zeroButton.x = firstColumn;
    zeroButton.y = firstRow;
    zeroButton.width = buttonWidth;
    zeroButton.height = buttonHeight;
    
    clearButton.x = secondColumn;
    clearButton.y = firstRow;
    clearButton.width = buttonWidth;
    clearButton.height = buttonHeight;

    equalsButton.x = thirdColumn;
    equalsButton.y = firstRow;
    equalsButton.width = buttonWidth;
    equalsButton.height = buttonHeight;
    
    addButton.x = fourthColumn;
    addButton.y = firstRow;
    addButton.width = buttonWidth;
    addButton.height = buttonHeight;
    
    subtractButton.x = fourthColumn;
    subtractButton.y = secondRow;
    subtractButton.width = buttonWidth;
    subtractButton.height = buttonHeight;
    
    multiplyButton.x = fourthColumn;
    multiplyButton.y = thirdRow;
    multiplyButton.width = buttonWidth;
    multiplyButton.height = buttonHeight;
    
    divideButton.x = fourthColumn;
    divideButton.y = fourthRow;
    divideButton.width = buttonWidth;
    divideButton.height = buttonHeight;
    
    oneButton.x = firstColumn;
    oneButton.y = secondRow;
    oneButton.width = buttonWidth;
    oneButton.height = buttonHeight;
    
    twoButton.x = secondColumn;
    twoButton.y = secondRow;
    twoButton.width = buttonWidth;
    twoButton.height = buttonHeight;
    
    threeButton.x = thirdColumn;
    threeButton.y = secondRow;
    threeButton.width = buttonWidth;
    threeButton.height = buttonHeight;
    
    fourButton.x = firstColumn;
    fourButton.y = thirdRow;
    fourButton.width = buttonWidth;
    fourButton.height = buttonHeight;
    
    fiveButton.x = secondColumn;
    fiveButton.y = thirdRow;
    fiveButton.width = buttonWidth;
    fiveButton.height = buttonHeight;
    
    sixButton.x = thirdColumn;
    sixButton.y = thirdRow;
    sixButton.width = buttonWidth;
    sixButton.height = buttonHeight;
    
    sevenButton.x = firstColumn;
    sevenButton.y = fourthRow;
    sevenButton.width = buttonWidth;
    sevenButton.height = buttonHeight;
    
    eightButton.x = secondColumn;
    eightButton.y = fourthRow;
    eightButton.width = buttonWidth;
    eightButton.height = buttonHeight;
    
    nineButton.x = thirdColumn;
    nineButton.y = fourthRow;
    nineButton.width = buttonWidth;
    nineButton.height = buttonHeight;

    numberDisplay.SetTextSize(numberDisplay.baseTextSize * widthScaleFactor);
    
    zeroButton.SetTextSize(zeroButton.baseTextSize * widthScaleFactor);
    clearButton.SetTextSize(clearButton.baseTextSize * widthScaleFactor);
    equalsButton.SetTextSize(equalsButton.baseTextSize * widthScaleFactor);

    addButton.SetTextSize(addButton.baseTextSize * widthScaleFactor);
    subtractButton.SetTextSize(subtractButton.baseTextSize * widthScaleFactor);
    multiplyButton.SetTextSize(multiplyButton.baseTextSize * widthScaleFactor);
    divideButton.SetTextSize(divideButton.baseTextSize * widthScaleFactor);

    oneButton.SetTextSize(oneButton.baseTextSize * widthScaleFactor);
    twoButton.SetTextSize(twoButton.baseTextSize * widthScaleFactor);
    threeButton.SetTextSize(threeButton.baseTextSize * widthScaleFactor);

    fourButton.SetTextSize(fourButton.baseTextSize * widthScaleFactor);
    fiveButton.SetTextSize(fiveButton.baseTextSize * widthScaleFactor);
    sixButton.SetTextSize(sixButton.baseTextSize * widthScaleFactor);

    sevenButton.SetTextSize(sevenButton.baseTextSize * widthScaleFactor);
    eightButton.SetTextSize(eightButton.baseTextSize * widthScaleFactor);
    nineButton.SetTextSize(nineButton.baseTextSize * widthScaleFactor);
}

function setup() {
    sketchDiv = document.getElementById('sketch');
    width = sketchDiv.offsetWidth - 100;
    height = (width / 48) * 31;

    // 48:31 canvas ratio
    canvas = new Canvas(width, height);
    canvas.SetFramerate(15);

    numberDisplay = new NumberDisplay(0, 0, width, 28, 0);
    zeroButton = new Button(0, height - 32, 60, 32, "0");
    clearButton = new Button(60, height - 32, 60, 32, "Clear");
    equalsButton = new Button(60, height - 32, 60, 32, "=");
    
    addButton = new Button(60 * 3, height - 32 - 32 * 0, 60, 32, "+");
    subtractButton = new Button(60 * 3, height - 32 - 32 * 1, 60, 32, "-");
    multiplyButton = new Button(60 * 3, height - 32 - 32 * 2, 60, 32, "×");
    divideButton = new Button(60 * 3, height - 32 - 32 * 3, 60, 32, "÷");

    oneButton = new Button(60 * 0, height - 64 - 32 * 0, 60, 32, "1");
    twoButton = new Button(60 * 1, height - 64 - 32 * 0, 60, 32, "2");
    threeButton = new Button(60 * 2, height - 64 - 32 * 0, 60, 32, "3");

    fourButton = new Button(60 * 0, height - 64 - 32 * 1, 60, 32, "4");
    fiveButton = new Button(60 * 1, height - 64 - 32 * 1, 60, 32, "5");
    sixButton = new Button(60 * 2, height - 64 - 32 * 1, 60, 32, "6");

    sevenButton = new Button(60 * 0, height - 64 - 32 * 2, 60, 32, "7");
    eightButton = new Button(60 * 1, height - 64 - 32 * 2, 60, 32, "8");
    nineButton = new Button(60 * 2, height - 64 - 32 * 2, 60, 32, "9");

    Resize();

    clearButton.OnClick = function() {
        Clear();
    }

    equalsButton.OnClick = function() {
        Equals();
    }

    addButton.OnClick = function() {
        Add();
    }
    
    subtractButton.OnClick = function() {
        Subtract();
    }
    
    multiplyButton.OnClick = function() {
        Multiply();
    }
    
    divideButton.OnClick = function() {
        Divide();
    }

    zeroButton.OnClick = function() {
        AppendValue(0);
    }

    oneButton.OnClick = function() {
        AppendValue(1);
    }

    twoButton.OnClick = function() {
        AppendValue(2);
    }

    threeButton.OnClick = function() {
        AppendValue(3);
    }

    fourButton.OnClick = function() {
        AppendValue(4);
    }

    fiveButton.OnClick = function() {
        AppendValue(5);
    }

    sixButton.OnClick = function() {
        AppendValue(6);
    }

    sevenButton.OnClick = function() {
        AppendValue(7);
    }

    eightButton.OnClick = function() {
        AppendValue(8);
    }

    nineButton.OnClick = function() {
        AppendValue(9);
    }
}

function draw() {
    canvas.ClearScreen();
    cursor(ARROW);

    numberDisplay.Draw();
    zeroButton.Draw();
    clearButton.Draw();
    equalsButton.Draw();
    addButton.Draw();
    subtractButton.Draw();
    multiplyButton.Draw();
    divideButton.Draw();
    oneButton.Draw();
    twoButton.Draw();
    threeButton.Draw();
    fourButton.Draw();
    fiveButton.Draw();
    sixButton.Draw();
    sevenButton.Draw();
    eightButton.Draw();
    nineButton.Draw();
}

function windowResized() {
    Resize();
}

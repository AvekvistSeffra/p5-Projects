function NumberDisplay(x, y, width, height, textData) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = textData;

    this.baseTextSize = 24;
    this.textSize = this.baseTextSize;

    this.value1 = 0;
    this.value2 = 0;

    this.operationFinished = false;

    // operation values:
    // 0 : nothing
    // 1 : addition
    // 2 : subtraction
    // 3 : multiplication
    // 4 : division
    this.operation = 0;

    this.maxSize = 10e14 - 1;

    this.ChangeText = function(newText) {
        this.text = newText;
    }

    this.SetTextSize = function(x) {
        this.textSize = x;
    }

    this.Draw = function() {
        this.Constrain();

        fill(0);
        textSize(this.textSize);
        textAlign(RIGHT, CENTER);
        text(this.text, this.x, this.y, this.width, this.height);
    }

    this.Constrain = function() {
        if(Number(this.text) >= this.maxSize) {
            this.text = "Error: Too large";
        }
    }
}

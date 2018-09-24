var canvas;
var playButton;
var stepButton;
var clearButton;

var scale;
var m_Width, m_Height;

var isPlaying;

var cells;
var cellsResult;

function setup() {
    scale = 16;
    m_Width = 32 * scale;
    m_Height = 18 * scale;
    canvas = new Canvas(m_Width, m_Height + 48);
    canvas.SetFramerate(10);

    var margin = 32;

    playButton = new Button(0 + margin, m_Height, 128, 48);
    playButton.text = "Paused";

    isPlaying = false;

    playButton.OnClick = function() {
        isPlaying = !isPlaying;
        if(!isPlaying)
            playButton.text = "Paused";
        else
            playButton.text = "Playing";
    }

    stepButton = new Button(160 + margin, m_Height, 128, 48);
    stepButton.text = "Step";

    stepButton.OnClick = function() {
        Update();
    }

    clearButton = new Button(320 + margin, m_Height, 128, 48);
    clearButton.text = "Clear";

    clearButton.OnClick = function() {
        isPlaying = true;
        playButton.OnClick();

        for(var x = m_Width / scale - 1; x >= 0; x--) {
            for(var y = m_Height / scale - 1; y >= 0; y--) {
                cells[x][y] = false;
                cellsResult[x][y] = false;
            }
        }
    }

    cells = [];
    cellsResult = [];

    for(var x = m_Width / scale; x >= 0; x--) {
        cells[x] = [];
        cellsResult[x] = [];
        for(var y = m_Height / scale; y >= 0; y--) {
            cells[x][y] = false;
            cellsResult[x][y] = false;
        }
    }
}

function GetMousePosition() {
    return [floor(mouseX / scale), floor(mouseY / scale)];
}

function DrawGrid() {
    stroke(220);
    for(i = 0; i < m_Height; i += 1 * scale) {
        line(0, i, m_Width, i);
    }

    for(i = 0; i < m_Width; i += 1 * scale) {
        line(i, 0, i, m_Height);
    }
}

function CreateCell(x, y) {
    if(!cells[x][y])
        cells[x][y] = true;
    else cells[x][y] = false;
}

function mousePressed() {
    var position = GetMousePosition();
    if(position[0] < floor(m_Width / scale) && position[0] >= 0 && position[1] < floor(m_Height / scale) && position[1] >= 0) {
        if(mouseIsPressed) {
            CreateCell(position[0], position[1]);
        }
    } else {
        if(playButton.hovered)
            playButton.OnClick();
        if(stepButton.hovered)
            stepButton.OnClick();
        if(clearButton.hovered)
            clearButton.OnClick();
    }
}

function GetNumberOfCellsAround(x, y) {
    var numberOfCells = 0;

    if(y >= 1) {
        if(x >= 1) {
            numberOfCells += cells[x - 1][y - 1];
        }
        numberOfCells += cells[x    ][y - 1];
        numberOfCells += cells[x + 1][y - 1];
    }

    if(x >= 1) {
        numberOfCells += cells[x - 1][y    ];
    }

    numberOfCells += cells[x + 1][y    ];
    
    if(x >= 1) {
        numberOfCells += cells[x - 1][y + 1];
    }

    numberOfCells += cells[x    ][y + 1];
    numberOfCells += cells[x + 1][y + 1];

    return numberOfCells;
}

function Update() {
    for(var x = m_Width / scale - 1; x >= 0; x--) {
        for(var y = m_Height / scale - 1; y >= 0; y--) {
            cellsResult[x][y] = cells[x][y];
        }
    }

    for(var x = m_Width / scale - 1; x >= 0; x--) {
        for(var y = m_Height / scale - 1; y >= 0; y--) {
            var numberOfCells = GetNumberOfCellsAround(x, y);

            if(numberOfCells <= 1 || numberOfCells >= 4) {
                if(cells[x][y]) cellsResult[x][y] = false;
            } else if(numberOfCells === 2 || numberOfCells === 3) {
                if(cells[x][y]) cellsResult[x][y] = true;
            }

            if(numberOfCells === 3)
                cellsResult[x][y] = true;
        }
    }

    for(var x = m_Width / scale - 1; x >= 0; x--) {
        for(var y = m_Height / scale - 1; y >= 0; y--) {
            cells[x][y] = cellsResult[x][y];
        }
    }
}

function draw() {
    canvas.ClearScreen();
    cursor(ARROW);

    fill(160);
    rect(0, m_Height, m_Width, 64);
    playButton.Draw();
    stepButton.Draw();
    clearButton.Draw();

    DrawGrid();

    if(isPlaying)
        Update();

    fill(80);
    for(var x = m_Width / scale - 1; x >= 0; x--) {
        for(var y = m_Height / scale - 1; y >= 0; y--) {
            if(cells[x][y]) {
                rect(x * scale, y * scale, scale, scale);
            }
        }
    }
}

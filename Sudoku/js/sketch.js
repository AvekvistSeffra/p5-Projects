var canvas;

var tileSize;

var m_Width, m_Height;

var testCell, testCell2, testCell3;

var cells;

function GeneratePuzzle() {
    cells = [];

    for(var i = 0; i < 9; i++) {
        cells[i] = [];
        for(var j = 0; j < 9; j++) {
            cells[i][j] = new Cell(i, j, floor(random(9)));
            cells[i][j].SetScale(tileSize);
            cells[i][j].baseNumber = true;
        }
    }
}

function setup() {
    tileSize = 48;

    m_Width = tileSize * 9;
    m_Height = tileSize * 9;

    canvas = new Canvas(m_Width, m_Height + tileSize * 2);
    GeneratePuzzle();
}

function DrawGrid() {
    stroke(200);
    for(i = 0; i <= m_Height; i += 1 * tileSize) {
        line(0, i, m_Width, i);
    }

    for(i = 0; i <= m_Width; i += 1 * tileSize) {
        line(i, 0, i, m_Height);
    }

    stroke(120);
    for(i = 0; i <= m_Height; i += 3 * tileSize) {
        line(0, i, m_Width, i);
    }

    for(i = 0; i <= m_Width; i += 3 * tileSize) {
        line(i, 0, i, m_Height);
    }
}

function draw() {
    canvas.ClearScreen();
    DrawGrid();

    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            cells[i][j].Draw();
        }
    }
}

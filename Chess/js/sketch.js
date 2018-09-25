var canvas;

var tileSize;

var m_Width, m_Height;

var boardPieces;

function setup() {
    tileSize = 48;

    m_Width = tileSize * 8;
    m_Height = tileSize * 8;

    canvas = new Canvas(m_Width, m_Height + tileSize * 1.5);
}

function DrawBoard() {
    noStroke();
    for(x = 0; x < m_Width / tileSize; x++) {
        for(y = 0; y < m_Height / tileSize; y++) {
            fill((x + y) % 2 ? 128 : 240);
            rect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
}

function draw() {
    canvas.ClearScreen();
    DrawBoard();
}

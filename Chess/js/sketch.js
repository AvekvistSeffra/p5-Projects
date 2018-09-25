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
            fill((x + y) % 2 ? [190 / 2.2, 180 / 2.2, 140 / 2.2] : [255 / 1.1, 248 / 1.1, 220 / 1.1]);
            rect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
}

function draw() {
    canvas.ClearScreen();
    DrawBoard();
    
    fill([205 / 6, 133 / 4, 63 / 2]);
    rect(0, m_Height, m_Width, tileSize * 1.5);
}

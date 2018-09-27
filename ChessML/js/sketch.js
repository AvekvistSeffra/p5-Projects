var canvas;

var tileSize;
var m_Width, m_Height;

function setup() {
    tileSize = 40;
    m_Width = 8 * tileSize;
    m_Height = 8 * tileSize;
    canvas = new Canvas(2 * m_Width, m_Height);
    textSize(18);
}

function DrawBoard() {
    noStroke();
    for(x = 0; x < m_Width / tileSize; x++) {
        for(y = 0; y < m_Height / tileSize; y++) {
            fill((x + y) % 2 ? [190 / 2.2, 180 / 2.2, 140 / 2.2] : [255 / 1.1, 248 / 1.1, 220 / 1.1]);
            rect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }

    fill(200);
    rect(m_Width, 0, m_Width * 2, m_Height);
}

function draw() {
    DrawBoard();

    fill(0);
    text("Visualisation of the Neural Network", m_Width + 10, 10, m_Width - 10, m_Height - 10);
}

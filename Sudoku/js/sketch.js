var canvas;

var tileSize;

var m_Width, m_Height;

function setup() {
    tileSize = 48;

    m_Width = tileSize * 9;
    m_Height = tileSize * 9;

    canvas = new Canvas(m_Width, m_Height + tileSize * 2);
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
}

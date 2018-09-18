var acceleration1;
var acceleration2;
var acceleration3;

var canvas;

var el1;
var el2;
var el3;

var scale;

function setup() {
    if(window.innerWidth <= 640) { 
        scale = 1;
    } else if(window.innerWidth <= 1280) {
        scale = 2;
    } else if(window.innerWidth <= 1920) {
        scale = 4;
    }
    
    canvas = new Canvas(256 * scale, 144 * scale);
    
    canvas.SetParent('sketch');
    canvas.SetFramerate(60);
    canvas.SetBackgroundColour(255);

    el1 = new Ellipse(width / 2 - 200 / 4 * scale, height / 2 - 200 / 4 * scale, 25 / 4 * scale, 25 / 4 * scale, [35, 121, 243]);
    el2 = new Ellipse(50 / 4 * scale, 50 / 4 * scale, 25 / 4 * scale, 25 / 4 * scale, [60, 230, 22]);
    el3 = new Ellipse(width / 2 - 400 / 4 * scale, height / 2, 25 / 4 * scale, 25 / 4 * scale, [222, 53, 123]);
    
    acceleration1 = new Vector(1, 1);
    acceleration2 = new Vector(1, 1);
    acceleration3 = new Vector(1, 1);
}

function draw() {
    canvas.ClearScreen();

    el1.Draw();
    el1.Accelerate(acceleration1);
    el1.Move();
    
    el2.Draw();
    el2.Accelerate(acceleration2);
    el2.Move();

    el3.Draw();
    el3.Accelerate(acceleration3);
    el3.Move();

    el1.width += el1.position.x > width / 2 ? -1 : 1;
    el1.height += el1.position.y > height / 2 ? -1 : 1;

    acceleration1.x = el1.position.x > width / 2 ? -1 : 1;
    acceleration1.y = el1.position.y > height / 2 ? -1 : 1;

    acceleration2.x = el2.position.x > width / 2 ? -1 : 1;
    acceleration2.y = el2.position.y > height / 2 ? -1 : 1;

    el3.width += el3.position.x > width / 2 ? -2 : 2;
    el3.height += el3.position.y > height / 2 ? -2 : 2;

    acceleration3.x = el3.position.x > width / 2 ? -1 : 1;
    acceleration3.y = el3.position.y > height / 2 ? -1 : 1;
}

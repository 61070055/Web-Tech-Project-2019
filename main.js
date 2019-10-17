var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const PI = Math.PI, HALF_PI = Math.PI / 2, PI_HALF = Math.PI / 2 + Math.PI, TWO_PI = Math.PI * 2;
var mainCircle = new Circle(w / 2, h / 2, w / 12, '#FFF')
var arcs = []
//top left
arcs.push(new Arc(w / 2 - 10, h / 2 - 10, w / 4.5, w / 4.5, PI, PI_HALF, '#FFFFFF'))
arcs.push(new Arc(w / 2 - 10, h / 2 - 10, w / 9, w / 9, PI, PI_HALF, '#417FAF'))
//top right
arcs.push(new Arc(w / 2 + 10, h / 2 - 10, w / 4.5, w / 4.5, PI_HALF, TWO_PI, '#FFFFFF'))
arcs.push(new Arc(w / 2 + 10, h / 2 - 10, w / 9, w / 9, PI_HALF, TWO_PI, '#417FAF'))
//bottom right
arcs.push(new Arc(w / 2 + 10, h / 2 + 10, w / 4.5, w / 4.5, TWO_PI, HALF_PI, '#FFFFFF'))
arcs.push(new Arc(w / 2 + 10, h / 2 + 10, w / 9, w / 9, TWO_PI, HALF_PI, '#417FAF'))
//bottom left
arcs.push(new Arc(w / 2 - 10, h / 2 + 10, w / 4.5, w / 4.5, HALF_PI, PI, '#FFFFFF'))
arcs.push(new Arc(w / 2 - 10, h / 2 + 10, w / 9, w / 9, HALF_PI, PI, '#417FAF'))

function setup() {
    createCanvas(w, h);
    frameRate(30);
    ellipseMode(RADIUS);
}

function draw() {
    //redraw
    background('#417FAF');

    //update component
    update();


    //draw
    arcs.forEach(arc => {
        arc.render()
    })
    mainCircle.render()
}

function update() {
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    mouseOver()
    mainCircle.update(w / 2, h / 2, w / 10);
    arcs[0].update(w / 2 - 10, h / 2 - 10, w / 4.5, w / 4.5, PI, PI_HALF, arcs[0].color)
    arcs[1].update(w / 2 - 10, h / 2 - 10, w / 9, w / 9, PI, PI_HALF, arcs[1].color)
    arcs[2].update(w / 2 + 10, h / 2 - 10, w / 4.5, w / 4.5, PI_HALF, TWO_PI, arcs[2].color)
    arcs[3].update(w / 2 + 10, h / 2 - 10, w / 9, w / 9, PI_HALF, TWO_PI, arcs[3].color)
    arcs[4].update(w / 2 + 10, h / 2 + 10, w / 4.5, w / 4.5, TWO_PI, HALF_PI, arcs[4].color)
    arcs[5].update(w / 2 + 10, h / 2 + 10, w / 9, w / 9, TWO_PI, HALF_PI, arcs[5].color)
    arcs[6].update(w / 2 - 10, h / 2 + 10, w / 4.5, w / 4.5, HALF_PI, PI, arcs[6].color)
    arcs[7].update(w / 2 - 10, h / 2 + 10, w / 9, w / 9, HALF_PI, PI, arcs[7].color)

}
function mouseOver() {
    if(Math.pow(mouseX - mainCircle.x, 2) + Math.pow(mouseY - mainCircle.y, 2) < Math.pow(mainCircle.diameter, 2)){
        mainCircle.color = 0
    } else {
        mainCircle.color = "#FFFFFF"
    }
    if(mouseX <= arcs[0].x && mouseY <= arcs[0].y && Math.pow(mouseX - arcs[0].x, 2) + Math.pow(mouseY - arcs[0].y, 2) < Math.pow(arcs[0].w, 2) && Math.pow(mouseX - arcs[1].x, 2) + Math.pow(mouseY - arcs[1].y, 2) > Math.pow(arcs[1].w, 2)){
        arcs[0].color = 0
    } else {
        arcs[0].color = "#FFFFFF"
    }
    if(mouseX >= arcs[2].x && mouseY <= arcs[2].y && Math.pow(mouseX - arcs[2].x, 2) + Math.pow(mouseY - arcs[2].y, 2) < Math.pow(arcs[2].w, 2) && Math.pow(mouseX - arcs[3].x, 2) + Math.pow(mouseY - arcs[3].y, 2) > Math.pow(arcs[3].w, 2)){
        arcs[2].color = 0
    } else {
        arcs[2].color = "#FFFFFF"
    }
    if(mouseX >= arcs[4].x && mouseY >= arcs[4].y && Math.pow(mouseX - arcs[4].x, 2) + Math.pow(mouseY - arcs[4].y, 2) < Math.pow(arcs[4].w, 2) && Math.pow(mouseX - arcs[5].x, 2) + Math.pow(mouseY - arcs[5].y, 2) > Math.pow(arcs[5].w, 2)){
        arcs[4].color = 0
    } else {
        arcs[4].color = "#FFFFFF"
    }
    if(mouseX <= arcs[6].x && mouseY >= arcs[6].y && Math.pow(mouseX - arcs[6].x, 2) + Math.pow(mouseY - arcs[6].y, 2) < Math.pow(arcs[6].w, 2) && Math.pow(mouseX - arcs[7].x, 2) + Math.pow(mouseY - arcs[7].y, 2) > Math.pow(arcs[7].w, 2)){
        arcs[6].color = 0
    } else {
        arcs[6].color = "#FFFFFF"
    }
}

// Class
function Component(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Circle(x, y, d, color) {
    Component.call(this, x, y, color);
    this.diameter = d;
    this.update = (x, y, d) => {
        this.x = x;
        this.y = y;
        this.diameter = d;
    }
    this.render = () => {
        fill(this.color);
        circle(this.x, this.y, this.diameter)
    }
}

function Arc(x, y, w, h, start, stop, color) {
    Component.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.start = start;
    this.stop = stop;
    this.render = () => {
        fill(this.color);
        arc(this.x, this.y, this.w, this.h, start, stop)
    }
    this.update = (x, y, w, h, start, stop, color) => {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.start = start;
        this.stop = stop;
        this.color = color;
    }
    this.setColor = (c) => {
        this.color = c;
    }

}
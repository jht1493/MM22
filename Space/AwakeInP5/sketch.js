let radius = 0;
let element;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    ellipse(width / 2, height / 2, radius, radius);
    radius++
    //p5 style of talking to html elements
    element = select("#existence");
    element.style('font-size', radius + 'px');
}
let cnv;

function setup() {
    const container = document.getElementById('p5container');
    const w = container.clientWidth * 0.8;
    const h = container.clientHeight * 0.8;

    cnv = createCanvas(w, h);
    cnv.parent('p5container');
}

function draw() {
    background(220);
    circle(width / 2, height / 2, 100);
}

function preload() {

}

function setup() {
    canvas = createCanvas(550,500);
    canvas.position(510,240);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 40, 40, 470, 420);
    fill(0, 200, 0);
    stroke(0,200, 0);
    rect( 13, 10, 525, 30);
    rect( 13, 450, 525, 30);
    rect( 15, 14, 30, 460);
    rect( 500, 14, 30, 460);
    fill(200, 0, 100);
    stroke(200, 0, 100);
    circle(34, 34, 68);
    circle(32, 466, 68);
    circle(516, 34, 68);
    circle(516, 466, 68);
}

function take_snapshot() {
    save('Shristi.png');
    
}


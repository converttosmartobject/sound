let xSound;
let xButton;

function preload() {
soundFormats('mp3', 'ogg');
xSound = loadSound('audio/audio4.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(0);
  fill(0);
  stroke(255);
    circle(200, 200, 550, 550);
  circle(200, 200, 500, 500);
  circle(200, 200, 450, 450);
circle(200, 200, 400, 400);
circle(200, 200, 350, 350);
circle(200, 200, 300, 300);
  circle(200, 200, 250, 250);
  circle(200, 200, 200, 200);
circle(200, 200, 150, 150);
circle(200, 200, 100, 100);
circle(200, 200, 50, 50);
  xButton = createButton('?');
  xButton.position(190, 190);
  xButton.mousePressed(eye);

}

function draw() {
}

function eye() {
  xSound.setVolume(0.4);
  xSound.play();
    loadImage('images/bg.jpg', img => {
    image(img, 0, 0, 400, 400);
  });
  loadImage('images/orange.png', img => {
  image(img, 0, 0, 400, 400);
});
  // loadImage('images/albino.gif', img => {
  //   image(img, 100, 100, 60, 60);
  // });
  //   loadImage('images/albino.gif', img => {
  //   image(img, 250, 100, 60, 60);
  // });

}

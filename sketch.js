const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var world;
var paperObj;
var dustbinIMG, bin;

function preload() {
  dustbinIMG = loadImage("dustbingreen.png");
}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  groundObject = new ground(width / 2, 670, width, 20);
  dustbinObj = new dustbin(1200, 650);
  paperObj = new paper(200, 200);

  bin = createSprite(200, 400, 200, 200);
  bin.addImage(dustbinIMG);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(225);

  if (keyDown("UP_ARROW")) {
    Matter.Body.applyForce(paperObj.body, paperObj.body.position, {
      x: 20,
      y: -50,
    });
  }

  groundObject.display();
  dustbinObj.display();
  paperObj.display();
}

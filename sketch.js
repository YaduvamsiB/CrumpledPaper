const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var world;
var paperObj;
var binImage;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  groundObject = new ground(width / 2, 670, width, 20);
  dustbinObj = new dustbin(1200, 650);
  paperObj = new paper(200, 200);
  binImage = new bin(1200, 500);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(225);

  if (keyDown("UP_ARROW")) {
    paperObj.velocityX = -2;
    paperObj.velocityY = 2;
  }

  groundObject.display();
  dustbinObj.display();
  binImage.display();
  paperObj.display();
}

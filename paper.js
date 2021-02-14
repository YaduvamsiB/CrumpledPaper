class paper {
  constructor(x, y) {
    var options = {
      isStatic: false,
      density: 1,
      friction: 1.8,
      restitution: 0.5,
    };

    this.body = Bodies.rectangle(x, y, 60, 60, options);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(225);
    imageMode(CENTER);
    image(this.image, 0, 0, 100, 100);
    pop();
  }
}

class bin {
  constructor(x, y) {
    var options = {
      isStatic: true,
      density: 1,
      friction: 1.8,
      restitution: 0.5,
    };
    this.body = Bodies.rectangle(x, y, 250, 350, options);

    this.image = loadImage("dustbingreen.png");

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    fill(255);
    rotate(this.angle);
    image(this.image, 0, 0, 250, 350);
    pop();
  }
}

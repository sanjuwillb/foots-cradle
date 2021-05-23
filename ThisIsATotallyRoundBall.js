class Ball {
  constructor(x, y) {
    var options = {
      restitution: 1,
      friction: 0,
      density: 1.2,
      frictionAir:0
    }
    this.body = Bodies.rectangle(x, y, 30, 30, options)
    this.x = x
    this.y = y
    World.add(world, this.body)
  }
  display() {
    var pos = this.body.position
    push()
    strokeWeight(2)
    stroke("cyan")
    fill("lime")
    translate(pos.x, pos.y)
    ellipse(0, 0, 30, 30)
    pop()
  }
}

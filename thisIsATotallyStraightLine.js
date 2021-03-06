  
class Line {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0,
      length: 500,
      frictionAir:0
    }
    this.pointB = pointB
    this.pointX = bodyA.x
    this.pointY = bodyA.y - 250
    this.sling = Constraint.create(options)
    World.add(world, this.sling)
  }

  display() {
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position
      var pointB = this.pointB
      push()
      strokeWeight(4)
      stroke("white")
      line(pointB.x, pointB.y, pointA.x, pointA.y)
      pop()
    }
  }
}
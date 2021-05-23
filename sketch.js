const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Mouse = Matter.Mouse
const Constraint = Matter.Constraint

const MouseConstraint = Matter.MouseConstraint

var world, engine, canvas
var i = 0

function setup() {
  canvas = createCanvas(720, 800)
  engine = Engine.create()
  world = engine.world

  bald1=new Bald(300,450)
  ball1=new Ball(330,450)
  ball2=new Ball(360,450)
  ball3=new Ball(390,450)
  bald2=new Bald(420,450)

  line1=new Line(bald1.body,{x:300,y:200})
  line2=new Line(ball1.body,{x:330,y:200})
  line3=new Line(ball2.body,{x:360,y:200})
  line4=new Line(ball3.body,{x:390,y:200})
  line5=new Line(bald2.body,{x:420,y:200})
}

function draw() {
  background(0)
  Engine.update(engine)
  line1.display()
  line2.display()
  line3.display()
  line4.display()
  line5.display()
  bald1.display()
  ball1.display()
  ball2.display()
  ball3.display()
  bald2.display()
  whosgotmynose()
}
function whosgotmynose(){
  if (keyCode === UP_ARROW){
    i=i+1
    if (i === 1){
      Matter.Body.applyForce(bald1.body,bald1.body.position,{x:-70,y:-200})
    }
  }
}
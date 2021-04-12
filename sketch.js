const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ball;
var box;
function preload() 
{
  
}

function setup()
{
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ball=Bodies.circle(200,400,50,{restitution:0.1,friction:0.1})
    World.add(world,ball)

    rope=Constraint.create({bodyA:ball,pointB:{x:200,y:0},length:500,stiffness:0.5})
    World.add(world,rope)

    ground=new Ground(600,650,1200,30)
    
   box=new Box(700,100,100,100)
   box1=new Box(700,100,100,100)
  box2=new Box(700,100,100,100)
   box3=new Box(700,100,100,100)
   box4=new Box(700,100,100,100)

}

function draw()
{
    background(200);
    Engine.update(engine);
    
    
    
    line(ball.position.x,ball.position.y,200,0)
    ellipse(ball.position.x,ball.position.y,100)

    ground.display()
    box.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    
    
}

function mouseDragged()
{
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
    
}
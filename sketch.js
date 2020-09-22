
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,box1,box2,box3,box4,box5,polygon;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 engine = Engine.create();
 world = engine.world;
  
  ground= new Ground(400,230,200,10);
  box1= new Box(200,200,30,30);
  box2=new Box(300,200,30,30);
  box3=new Box(400,200,30,30);
  box4=new Box(500,200,30,30);
  box5=new Box(600,200,30,30);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot= new SlingShot(this.polygon,{x:100,y:200});
  
  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  drawSprites();

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  circle(this.body.polygon.position.x,this.polygon.position.y,20,20);
  
 

  
}
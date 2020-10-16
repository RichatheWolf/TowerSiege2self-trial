const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  polygonImage = loadImage("polygon.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create(); 
  world = engine.world; 
  Engine.run(engine);
  

  // ground
  base1 = new ground()
  // stand
  stand1 = new Stand(390,300,250,10); 
  stand2 = new Stand(700,200,200,10);
  // bottom level of pyramid
  block1 = new Block(300,275,30,40); 
  block2 = new Block(330,275,30,40); 
  block3 = new Block(360,275,30,40); 
  block4 = new Block(390,275,30,40); 
  block5 = new Block(420,275,30,40); 
  block6 = new Block(450,275,30,40); 
  block7 = new Block(480,275,30,40); 
  //level two 
  block8 = new Block(330,235,30,40); 
  block9 = new Block(360,235,30,40); 
  block10 = new Block(390,235,30,40); 
  block11 = new Block(420,235,30,40); 
  block12 = new Block(450,235,30,40); 
  // middle level
  block13 = new Block(360,195,30,40); 
  block14 = new Block(390,195,30,40); 
  block15 = new Block(420,195,30,40); 
  //top block
  block16 = new Block(390,155,30,40);
  // other variables
  polygon = Bodies.circle(50,200,20)
  World.add(world, polygon)
  sling1 = new slingshot(this.polygon, {x: 100, y:200})
}

function draw() {
  background(0,0,260);


  base1.display()
  brick1.display()
  brick2.display()
  brick3.display()
  brick4.display()
  brick5.display()
  brick6.display()
  brick7.display()
  brick8.display()
  sling1.display
  imageMode(CENTER)
  image(polygonImage, polygon.position.x, polygon.position.y, 40, 40)
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY})
}
function mouseReleased(){
  sling1.fly()
}
function keyPressed(){
  if (keyCode == 32){
    sling1.attach(this.polygon)
  }
}
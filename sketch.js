
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine,world;

var bg;

function preload(){
  bg=loadImage("Img/bg.png")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;


	
	//Create the Bodies Here.
	base1=new Ground(680,580,350,40);
	base2=new Ground(1170,300,350,40); 
	base3=new Ground(700,650,1600,30)
	
	block1=new Box(700,570,50,50)
	block2=new Box(630,570,50,50)
	block3=new Box(650,570,50,50)
	block4=new Box(670,570,50,50)
	block5=new Box(720,570,50,50)
	block6=new Box(650,550,50,50)
	block7=new Box(670,550,50,50)
	block8=new Box(690,550,50,50)
	block9=new Box(710,550,50,50)
	block10=new Box(660,530,50,50)
	block11=new Box(680,530,50,50)
	block12=new Box(700,530,50,50)
	block13=new Box(670,510,50,50)
	block14=new Box(690,510,50,50)
	block15=new Box1(1065,255,50,50)
	block16=new Box1(1115,255,50,50)
	block17=new Box1(1165,255,50,50)
	block18=new Box1(1215,255,50,50)
	block19=new Box1(1265,255,50,50)
	block20=new Box1(1245,207,50,50)
	block21=new Box1(1195,207,50,50)
	block22=new Box1(1145,207,50,50)
	block23=new Box1(1095,207,50,50)
	block24=new Box1(1225,159,50,50)
	block25=new Box1(1175,159,50,50)
	block26=new Box1(1125,159,50,50)
	block27=new Box1(1205,111,50,50)
	block28=new Box1(1155,111,50,50)

   shoot=new Shoot(90,200,40,40);
   
   slingshot=new SlingShot(shoot.body,{x:90,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  Engine.update(engine);

  textSize(30);
  textFont("Algerian");
  fill(0);
  text("DRAG THE HEXAGON AND RELEASE IT TOWARDS THE BLOCKS",100,50)


  base1.display()
  base2.display()
  base3.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()
  shoot.display()
  slingshot.display()


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(shoot.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
	slingshot.fly()
	}


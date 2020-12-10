
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ballDiameter = 40;

	startballPositionX = width/2;
	startballPositionY = height/4 +400;


	
	ball = new Ball(startballPositionX-ballDiameter*2,startballPositionY,ballDiameter);
	ball2 = new Ball(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
	ball3 = new Ball(startballPositionX,startballPositionY,ballDiameter);
	ball4 = new Ball(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
	ball5 = new Ball(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);



	roofs = new Holder(width/2,height/4,width/3,40);


	sling1 = new Sling(ball.body,roofs.body,-ballDiameter*2,0);
	sling2 = new Sling(ball2.body,roofs.body,-ballDiameter*1,0);
	sling3 = new Sling(ball3.body,roofs.body,0,0);
	sling4 = new Sling(ball4.body,roofs.body,ballDiameter*1,0);
	sling5 = new Sling(ball5.body,roofs.body,ballDiameter*2,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);

  roofs.display();

sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

  
ball.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();


 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-45});
	}
}

function drawLine(constraint){
	ballBodyPosition = constraint.bodyA.position;
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX = roofBodyPosition + roofBodyOffset.x;
	roofBodyY = roofBodyPosition + roofBodyOffset.y;
	line (ballBodyPosition.x,ballBodyPosition.y,roofBodyX,roofBodyY);
}


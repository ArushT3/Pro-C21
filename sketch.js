
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	var ball_options = {
		isStatic:false,
		restitution:0.5,
		friction:0,
		densitiy:1.2,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(670, 620, 20, 100);

	ball=Bodies.circle(200, 200, 25, ball_options)
	World.add(world,ball)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  background(0);

  rect(ball.position.x, ball.position.y, width * 2, 1);

  Engine.update(engine);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites(); 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,  {x:15, y:-15})
	}
}


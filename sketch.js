const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the

  engine= Engine.create();
  world = engine.world;

  
  var ball_options = {
    restitution:0.9
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
}


function draw() 
{
  background("black");
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rectMode(CENTER)
  fill("red")
  rect(ground.position.x,ground.position.y,400,20);
  
}


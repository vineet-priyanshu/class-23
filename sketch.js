const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var world,engine;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

var ground_option={
  isStatic:true
}

  ground=Bodies.rectangle(200,390,200,20,ground_option);
  World.add(world,ground);

var ball_option={
  restitution:2.0
}

  ball=Bodies.circle(200,100,20,ball_option);
  World.add(world,ball);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}
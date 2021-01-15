

const World= Matter.World;//physical world
const Engine = Matter.Engine;//used to physics concept
const Bodies = Matter.Bodies; //object

var engine, world,object;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option={

    isStatic:true
  }

  object = Bodies.rectangle(200,100,80,80,option);
  World.add(world,object);

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
  console.log(object.label);


}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,80,80);
  drawSprites();
}
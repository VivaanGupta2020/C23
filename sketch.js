const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var backgroundImg
var angle,can;


function preload() {
  towerImage = loadImage("./assets/tower.png");
  backgroundImg = loadImage("./assets/background.gif")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
angle = -PI/4
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  can = new Cannon(180,120,110,50,angle)

}

function draw() {
  background(189);
  image(backgroundImg,0,0,width,height)
  Engine.update(engine);

  ground.display();
  can.display();
  tower.display();
  
 
}

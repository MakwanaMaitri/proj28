const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mongo2, mango3, mango4, mango5, mango6, stoneObj;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1200,200,30);
	mango3 = new mango(999,50,30);
	mango4 = new mango(890,200,30);
	mango5 = new mango(1000,250,30);
	mango6 = new mango(1110,200,30);

	stoneObj = new StoneObj(600,60,30,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
 
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

 // stoneObj.x = mouseX;
  //stoneObj.y = mouseY;


  treeObj.display();
  mango1.display();

  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  mango6.display();

  stoneObj.display();

   detectollision(stoneObj,mango1);
   detectollision(stoneObj,mango2);
   detectollision(stoneObj,mango3);
   detectollision(stoneObj,mango4);
   detectollision(stoneObj,mango5);
  
  groundObject.display();

  drawSprites();

}

function detectollision(lstone,lmango){
 mangoBodyPosition =lmango.body.position
  stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   if(distance <= lmango.r + lstone.r){
     Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
    launcherObject.attact(stoneObj.body);
  }
}
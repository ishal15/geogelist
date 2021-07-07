const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone, stone1,stone2,stone3,stone4,stone5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone= new Stone(200,500, 5);
   stone1= new Stone(200,550, 9);
   stone2= new Stone(200,530, 10);
   stone3= new Stone(200,510, 6);
   stone4= new Stone(200,525, 7);
   stone5= new Stone(200,540, 15);



}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
 stone.display();
 stone1.display();
 stone2.display();
 stone3.display();
 stone4.display();
 stone5.display();
    
 
}
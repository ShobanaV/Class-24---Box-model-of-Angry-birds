const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4,box5, ground;
var pig1, pig2;
var log1, log2,log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,450,70,70);
    box2 = new Box(1100,450,70,70);
    box3 = new Box(900, 350, 70, 70 );
    box4 = new Box(1100, 350, 70, 70);
    box5 = new Box(1000,260,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(1000, 450);
    pig2 = new Pig(1000, 350);
    log1 = new Log(1000,400,270,0);
    log2 = new Log(1000,300,270,0);
    log3 =new Log(950,200,130,-PI/4) // 180 degrees = PI radians
    log4 = new Log(1050,200,130,PI/4);
    bird = new Bird(400, 100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}
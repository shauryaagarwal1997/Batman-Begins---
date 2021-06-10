const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var rainDrops=[];
var x=0;
var y=0;
var drop1;
var man;
var manAnim;
var manAnimation;
var l1,l2,l3,l4;

function preload(){
    manAnimation=loadAnimation("walking_1.png","walking_2.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    l1=loadImage("1.png");
    l2=loadImage("2.png");
    l3=loadImage("3.png");
    l4=loadImage("4.png");
}
function setup(){
    createCanvas(600,950);
    engine=Engine.create();
    world=engine.world;
   drop1=new Drops(200,200,3)

    var maxDrops =3000;
    for(var i=0; i<maxDrops; i++){
        rainDrops[i]=new Drops((random(0,600)),random(-10000,950),3);
     }

    man=Bodies.circle(300,462,150);
    World.add(world,man);
    man.isStatic=true;
    
    manAnim=createSprite(300,620,50,50);
    manAnim.addAnimation("walkingMan",manAnimation);
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i=0; i<rainDrops.length; i++){
        rainDrops[i].display();

    }
    spawnLightning();
    drop1.display();
    drawSprites();
}   
function spawnLightning(){
    if(frameCount % 60 === 0){

    var lightning;
    lightning=createSprite(random(50,550),60,50,50);
    lightning.scale=0.7
    var rando = Math.round(random(1,4))

        switch(rando){
        case 1:lightning.addImage(l1);
        case 2:lightning.addImage(l2);
        case 3:lightning.addImage(l3);
        case 4:lightning.addImage(l4);
    }
    lightning.lifetime=6;
}
    
}



var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(600,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();

  survivalTime=0;
  score=0;
}


function draw() {
 
 background("white");
  
 if(keyDown("space")){
   
   monkey.velocityY=-12;
   
 }
  
  monkey.velocityY=monkey.velocityY+ 0.8;
  
  monkey.collide(ground);
  
 if(ground.x<0){
   
   ground.x=ground.width/2;
   
 } 
  
  stroke("black");
  textSize(20);
  fill("red");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("red");
  survivalTime=Math.round(frameCount/frameRate());
  text("Survival time: "+survivalTime,50,50);
  
 spawnBananas(); 
 spawnObstacles(); 
  
 drawSprites();
}

function spawnObstacles(){
  
 if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,325,10,40);
  
    obstacle.velocityX = -6;
  
    obstacle.addImage(obstacleImage);
           
    obstacle.scale =  0.1;
    obstacle.lifetime = 100;

    obstacleGroup.add(obstacle);
  }

}

function spawnBananas() {
  
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,300,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=200;
    
    FoodGroup.add(banana);
}

}

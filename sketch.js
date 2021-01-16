var trex,ground,Invisibleground,clouding,CloudsGroup,ObstaclesGroup,O1,O2,O3,O4,O5,O6

function preload(){
trexing=loadAnimation('trex1.png','trex3.png','trex4.png');
  grounding=loadImage('ground2.png');
  clouding=loadImage('cloud.png');
  O1=loadImage('obstacle1.png');
  O2=loadImage('obstacle2.png');
  O3=loadImage('obstacle3.png');
  O4=loadImage('obstacle4.png');
  O5=loadImage('obstacle5.png');
  O6=loadImage('obstacle6.png');
}

function setup() {
  createCanvas(600, 200);
  
  // create a trex
  trex = createSprite(100,170,20,10);
  trex.addAnimation('trex',trexing);
  trex.scale=0.5
  
  //create ground
  ground = createSprite(300,180,600,20);
  ground.addImage(grounding);
  ground.x = ground.width /2;
  ground.velocityX=-5;

  
  Invisibleground=createSprite(300,190,600,10);
  Invisibleground.visible=false;  
  
  CloudsGroup=new Group();
  ObstaclesGroup = new Group();
}


function draw() {
  background(180);
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  drawSprites()
  
  spawnObstacles();
  spawnClouds();
  
  if (keyDown('space')){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY + 0.8;
  
  trex.collide(Invisibleground);
}
function spawnObstacles() {
  //Write code here to spawn the obsticals
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(300,165,10,40);
    obstacle.velocityX =-6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: obstacle.addImage(O1);
        break;
        case 2: obstacle.addImage(O2);
        break;
        case 3: obstacle.addImage(O3);
        break;
        case 4: obstacle.addImage(O4);
        break;
        case 5: obstacle.addImage(O5);
        break;
        case 6: obstacle.addImage(O6);
        break;
    }
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 107;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}
// Creating functions for Clouds
function spawnClouds() {
  //Write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(50,120));
    cloud.addImage(clouding)
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 207;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  
}

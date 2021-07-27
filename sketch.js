//I want to move the robber all around the screen.
var robber,robberImage;

function preload(){
  robberImage = loadImage('robber.jpeg');
}

function setup() {
  createEdgeSprites;
  createCanvas(1800,1800);
  robber =  createSprite(25,200);
  robber.addImage(robberImage);
}

function draw() {
  background("red");
  // move left
  if(robber.position.x < 1500){
    robber.position.x = robber.position.x + 10;
  }
  // move down
   if(robber.position.x > 1500){
    robber.position.y = robber.position.y + 10;
  }
  //move right
   if(robber.position.y > 1500 && robber.position.x === 1500){
    robber.position.x = robber.position.x - 10;
  }
 drawSprites();
}



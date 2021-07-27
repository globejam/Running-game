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
  
  if(robber.position.x > 1600){
    robber.position.x = robber.position.x - 5;
  }
   if(robber.position.x < 1600){
    robber.position.x = robber.position.x + 10;
  }
 drawSprites();
}



var circle1,circleImage;

function preload(){
  circleImage = loadImage('robber.jpeg');
}

function setup() {
  createEdgeSprites;
  createCanvas(1800,1800);
  circle1 =  createSprite(25,200);
  circle1.addImage(circleImage);
}

function draw() {
  background("red");
  
  if(circle1.position.x > 1600){
    circle1.position.x = circle1.position.x + 5;
  }
   if(circle1.position.x < 1600){
    circle1.position.x = circle1.position.x - 10;
  }
 drawSprites();
}



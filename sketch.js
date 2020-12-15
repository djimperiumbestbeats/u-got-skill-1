var obstacle1,margin1,margin2,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7
var fury
var tunnel1,tunnel2
var bmusic
function preload(){
//bmusic=loadSound("angrybird/u got skill/y2mate.com - Avicii - Levels")
}
function setup() {
  createCanvas(displayWidth,displayHeight-110);
 
  obstacle4=createSprite(450,50,15,75)
  tunnel1=createSprite(40,300,80,40)
  tunnel2=createSprite(1240,300,80,40)
  obstacle6=createSprite(900,50,15,75)
  obstacle5=createSprite(750,50,15,75)
  obstacle3=createSprite(600,50,15,75)
  obstacle1=createSprite(150,50,15,75)
  obstacle2=createSprite(300,50,15,75)
  obstacle7=createSprite(1050,50,15,75)
  margin1=createSprite(displayWidth/2,0,displayWidth,50)
  margin2=createSprite(displayWidth/2,displayHeight-110,displayWidth,50)
  obstacle1.velocityY=random(10,30)
  obstacle2.velocityY=random(20,30)
  obstacle3.velocityY=random(10,30)
  obstacle4.velocityY=random(10,30)
  obstacle5.velocityY=random(10,30)
  obstacle7.velocityY=random(10,30)
  obstacle6.velocityY=random(10,30)
  fury=createSprite(50,300,20,20)
  margin1.shapeColor="black"
  margin2.shapeColor="black"
  obstacle1.shapeColor="black"
  obstacle2.shapeColor="black"
  obstacle3.shapeColor="black"
  obstacle4.shapeColor="black"
  obstacle5.shapeColor="black"
  obstacle6.shapeColor="black"
  obstacle7.shapeColor="black"
  fury.shapeColor="black"
  tunnel1.shapeColor="black"
  tunnel2.shapeColor="black"
}

function draw() {
  background(255,255,255);  
  play()
 strokeWeight(2)
 stroke(0,90)
 stroke("black")
  text("level 1 tunnel",5,275)
  text("level 2 tunnel",1205,275)
  text("press right", 10,330)
  text("on we go", 1220,330)
obstacle1.bounceOff(margin2)
obstacle1.bounceOff(margin1)
obstacle2.bounceOff(margin2)
obstacle2.bounceOff(margin1)
obstacle3.bounceOff(margin2)
obstacle3.bounceOff(margin1)
obstacle4.bounceOff(margin2)
obstacle4.bounceOff(margin1)
obstacle5.bounceOff(margin2)
obstacle5.bounceOff(margin1)
obstacle6.bounceOff(margin2)
obstacle7.bounceOff(margin1)
obstacle7.bounceOff(margin2)
obstacle6.bounceOff(margin1)

if(keyDown("Left")){
  fury.x=fury.x-3
}
if(keyDown("right")){
  fury.x=fury.x+3
}

if(keyDown("up")){
  fury.y=fury.y-3
}
if(keyDown("down")){
  fury.y=fury.y+3
}
if(fury.isTouching(obstacle1)){
  fury.x=50
  fury.y=300
}

if(fury.isTouching(obstacle2)){
  fury.x=50
  fury.y=300
}

if(fury.isTouching(obstacle3)){
  fury.x=50
  fury.y=300
}

if(fury.isTouching(obstacle4)){
  fury.x=50
  fury.y=300
}
if(fury.isTouching(obstacle5)){
  fury.x=50
  fury.y=300
}
if(fury.isTouching(obstacle6)){
  fury.x=50
  fury.y=300
}
if(fury.isTouching(obstacle7)){
  fury.x=50
  fury.y=300
}






















  drawSprites();
}
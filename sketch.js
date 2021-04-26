var starImg,bgImg;
var star, starBody;
var fairy , fairyImg;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")

	//to load sound


}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(130,520,10,10);
	fairy.addAnimation("fairy1",fairyImg);
fairy.scale= 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
 
  if(star.y > 470 && starBody.position.y > 470 ){
   Matter.Body.setStatic(starBody,true);

  }
  console.log(star.y);

  //write code to stop star in the hand of fairy

  fairy.setCollider("rectangle",450,20,200,10);

  drawSprites();

}

function keyPressed() {
 star.collide(fairy);
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right

	if(keyDown(RIGHT_ARROW)){
		fairy.velocityX=6
	}else if (keyDown(LEFT_ARROW)){
		fairy.velocityX=-6
	}else if (keyDown(DOWN_ARROW)){
		star.velocityY=3
	}
	
	if(star.y>470){
		star.velocityY=0
	}


}

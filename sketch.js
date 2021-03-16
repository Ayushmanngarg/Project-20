var catSitting, catMoving, catStanding, cat;
var mouseCheese, mouseMove, mouseGlass, mouse;
var garden;


function preload() {
    //load the images here
    garden = loadImage("images/garden.png");
    mouseCheese = loadAnimation("images/mouse1.png");
    mouseMove = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseGlass = loadAnimation("images/mouse4.png");
    catSitting = loadAnimation("images/cat1.png");
    catMoving = loadAnimation("images/cat2.png", "images/cat3.png");
    catStanding = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat = createSprite(800,600);
  cat.addAnimation("cat",catSitting);
  cat.addAnimation("cat2", catMoving);
  cat.addAnimation("cat3", catStanding);
  cat.scale = 0.2;
  cat.setCollider("rectangle",0,0,30,cat.height);

  mouse = createSprite(200,600);
  mouse.addAnimation("mouse",mouseCheese);
  mouse.addAnimation("mouse2",mouseMove);
  mouse.addAnimation("mouse3",mouseGlass);
  mouse.scale = 0.2;
  mouse.setCollider("rectangle",0,0,10,mouse.height);
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < mouse.width/2 + cat.width/2){
        cat.velocityX = 0;
        cat.changeAnimation("cat3", catStanding);
        mouse.changeAnimation("mouse3",mouseGlass);
    }
    cat.debug = true;
    mouse.debug = true;
    drawSprites();
}


function keyPressed(){
    if(keyCode === 32){
        cat.velocityX = -2;
        cat.changeAnimation("cat2", catMoving);
        mouse.changeAnimation("mouse2", mouseMove);
    }

  //For moving and changing animation write code here


}

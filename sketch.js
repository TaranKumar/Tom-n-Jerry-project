var bgimg;

var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1, mouseimg2,mouseimg3;

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg2 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg2 = loadAnimation("images/mouse1.png");
    catimg3 = loadAnimation("images/cat4.png");
    mouseimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,650,200,200);
    cat.addAnimation("catsitting",catimg2);
    cat.scale = 0.1;

    mouse = createSprite(150,650,200,200);
    mouse.addAnimation("mousesitting", mouseimg2);
    mouse.scale = 0.1;

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    cat.display();
    mouse.display();

    if (cat.x - mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catend",catimg3);
        cat.changeAnimation("catend");
        mouse.addAnimation("mouseend",mouseimg3);
        mouse.changeAnimation("mouseend");
        cat.x = cat.x + 50;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg1);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

  if(keyCode===LEFT_ARROW){
      cat.addAnimation("catrun", catimg1);
      cat.changeAnimation("catrun");
      cat.velocityX = -6;
  }

}

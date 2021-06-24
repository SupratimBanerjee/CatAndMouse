var garden,gardenImage;
var tom,tomImage;
var jerry,jerryImage;
var jerryTeasing,jerryImg3;
var tomRun,tomImg2;
var jerryHppy,jerryHppyImg;
var tomStand,tomStandImg;

function preload() {
    gardenImage=loadImage("Images/garden.png");
    tomImage=loadImage("Images/cat1.png");
    jerryImage=loadImage("Images/mouse4.png");
    jerryImg3=loadImage("Images/mouse3.png");
    tomImg2=loadImage("Images/cat2.png");
    mouseHappyImg=loadImage("Images/mouse1.png");
   // tomStandImg=loadImage("Images/cat4.png");

    

    //load the images here
}

function setup(){
    createCanvas(800,800);
    garden=createSprite(400,390);
    garden.addImage(gardenImage);

    tom=createSprite(591,530);
    tom.addImage(tomImage);
    tom.scale=0.2;

    jerry=createSprite(130,590);
    jerry.addImage(jerryImage);
    jerry.scale=0.2;

    //create tom and jerry sprites here

}

function draw() {

    background(255);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        //tom.velocityX=0;
        //tom.addAnimation("tomStand",tomStandImg);
        //tom.changeAnimation("tomStand");
        jerry.addAnimation("jerryHppy",jerryHppyImg);
        jerry.changeAnimation("jerryHppy");


    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        jerry.addAnimation("jerryTeasing",jerryImg3);
        jerry.changeAnimation("jerryTeasing");
        jerry.frameDelay = 25;
    }

    if(keyCode === LEFT_ARROW){
         tom.addAnimation("tomRun",tomImg2);
        tom.changeAnimation("tomRun");
         tom.frameDelay = 25;
         tom.velocityX=-5;
    }
    
}

    

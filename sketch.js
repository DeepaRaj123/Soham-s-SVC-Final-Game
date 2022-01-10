var bg,bgImg,bg2Img;
var gameState="START"
var zombierandomcount,level1title,level1titleImg,bullettitle,bullettitleImg,scoretitle,scoretitleImg;
var zombie,bullet1;
var zombieGroup,blast,blastImg;
var score=19,bulletcount=21,timer1=0,timer2=30,timer12=0,timer22=30,score1=19;
var gamewin,gameover,gamewinImg,gameoverImg;
var gamelose = false,restart,bomb,bombImg,bombtimer=0;
var level2board,level2boardImg,coin2,coin2Img,bulletcounttitle2,bulletcounttitle2Img;
var leftwall,leftwallImg,rightwall,rightwallImg,timerbg,timerbgImg;
var rightjumper,ground,gameover1,gameover1Img,gamewin2,gamewin2Img,bulletcount1=21;
var sound,zombiecry,zombielaugh,theme;

function preload()
{
bgImg = loadImage("bg2.jpg")
bg2Img = loadImage("bg3.jpg")
logoImg = loadImage("logoImg.png")
buttonImg = loadImage("buttonImg.png")
bg1Img = loadImage("bg4.jpg")
plyr1Img = loadImage("plyr1.png")
zombieImg = loadAnimation("zombie.gif")
bullet1Img = loadImage("bullet1.png")
zombie1Img = loadAnimation("zombie1.gif")
zombie2Img = loadAnimation("zombie2.gif")
level1titleImg = loadImage("level1title.png")
bullettitleImg = loadImage("bulletscounttitle.png")
scoretitleImg = loadImage("coin.png")
gamewinImg = loadImage("gamewin1.png")
gameoverImg = loadImage("gameover.png");
bombImg = loadImage("bomb.png");
blastImg = loadImage("blast2.gif");
level2boardImg = loadImage("level2scoreboard.png");
coin2Img = loadImage("coin2.png");
bulletcounttitle2Img = loadImage("bulletcounttitle2.png");
leftwallImg = loadImage("leftwall.png");
rightwallImg = loadImage("rightwall.png");
timerbgImg = loadImage("timerbg.png");
infoImg = loadImage("info.png");
gameinfoImg = loadImage("gameinfo.png")
sound = loadSound("gunsound.mp3");
gameover1Img = loadImage("gameover1.png");
gamewin2Img = loadImage("gamewin2.png");
zombiecry = loadSound("zombiecrying.wav");
zombielaugh = loadSound("zombielaughing.wav");
theme = loadSound("theme.wav");


}


function setup()
{
 createCanvas(windowWidth,windowHeight);
 logoimg = createSprite(width/2,height/2,40,40)
 logoimg.addImage(logoImg)
 logoimg.scale=1.9

PlaybuttonImg = createSprite(width/2,height-70,40,40)
PlaybuttonImg.addImage(buttonImg)
PlaybuttonImg.scale=0.08
logoimg.visible=false;  
PlaybuttonImg.visible=false;


plyr1 = createSprite(246,540,40,40)
plyr1.addImage(plyr1Img)
plyr1.scale=0.6

zombieGroup=new Group()
bullet1 = createSprite(plyr1.x,457,40,40)
bullet1.addImage(bullet1Img)
bullet1.scale=0.2
bullet1.visible = false;

level1title = createSprite(width/2,100,40,40)
level1title.addImage(level1titleImg)
level1title.scale=0.2
level1title.visible = false;

scoretitle = createSprite(width-140,70,40,40)
scoretitle.addImage(scoretitleImg)
scoretitle.scale=0.135
scoretitle.visible = false;

bullettitle = createSprite(width-140,150,40,40)
bullettitle.addImage(bullettitleImg)
bullettitle.scale=0.13
bullettitle.visible = false;

gamewin = createSprite(width/2,height/2+100,40,40)
gamewin.addImage(gamewinImg)
gamewin.scale=0.4
gamewin.visible = false;

gameover = createSprite(width/2,height/2-50,40,40)
gameover.addImage(gameoverImg)
gameover.scale=0.35
gameover.visible = false;
gameover.setCollider("circle",10,450,200);

restart = createSprite(width/2,height/2+120,40,40)
restart.scale=3;
restart.visible = false;

bomb = createSprite(width/3,height/2-200,40,40)
bomb.addImage(bombImg)
bomb.scale=0.35
bomb.visible = false;

blast = createSprite(width/2,height-200,40,40)
blast.addImage(blastImg);
blast.scale=3;
blast.visible = false;

level2board = createSprite(width/2,100,40,40)
level2board.addImage(level2boardImg)
level2board.scale=0.2
level2board.visible = false;

coin2 = createSprite(width-140,70,40,40)
coin2.addImage(coin2Img)
coin2.scale=0.135
coin2.visible = false;

bulletcounttitle2 = createSprite(width-140,150,40,40)
bulletcounttitle2.addImage(bulletcounttitle2Img)
bulletcounttitle2.scale=0.13
bulletcounttitle2.visible = false;

leftwall = createSprite(width-100,height/2+100,200,40)
leftwall.addImage(leftwallImg)
leftwall.scale=0.3
leftwall.visible = false;

rightwall = createSprite(140,height/3,200,40)
rightwall.addImage(rightwallImg)
rightwall.scale=0.13
rightwall.visible = false;

timerbg = createSprite(width/2-220,120,40,40)
timerbg.addImage(timerbgImg)
timerbg.scale=0.11
timerbg.visible = false;

rightjumper = createSprite(width-480,height-250,50,50);
ground = createSprite(width/2,height-20,width,50);
rightjumper.visible = false;
ground.visible = false;

info = createSprite(width-50,height-50,40,40)
info.addImage(infoImg)
info.scale=0.2

gameinfo = createSprite(width-300,height-250,40,40)
gameinfo.addImage(gameinfoImg)
gameinfo.scale=0.3;
gameinfo.visible = false;

gamewin1 = createSprite(width/2,height/2+50,40,40)
gamewin1.addImage(gamewin2Img)
gamewin1.scale=0.35
gamewin1.visible = false;
gamewin1.setCollider("circle",10,150,200);

gameover1 = createSprite(width/2,height/2-50,40,40)
gameover1.addImage(gameover1Img)
gameover1.scale=0.3
gameover1.visible = false;
gameover1.setCollider("circle",10,450,200);

}

function draw() {
 if(gameState === "START"){
  background(bgImg);
  logoimg.visible=true;
  PlaybuttonImg.visible=true;
 plyr1.visible=false;
 
  if(mousePressedOver(PlaybuttonImg)){
    theme.loop();
gameState = "level1"
  }
  if(mousePressedOver(info)){
gameinfo.visible=true
  }
  if(mousePressedOver(gameinfo)){
    gameinfo.visible=false
      }
 }


 else if(gameState === "level1"){
   
   background(bg1Img);
   if(frameCount%10===0)
   {
     timer1++;
     if(timer1%5===0&&score!=20&&bulletcount!=0&&timer2!=0&&gamelose===false)
     {
       timer2--;
     }
   }
  
   logoimg.visible=false; 
   PlaybuttonImg.visible=false;
   plyr1.visible=true;
   level1title.visible = true;
   scoretitle.visible = true;
   bullettitle.visible = true;
info.visible=false;
   Zombie();
   

  
      if (keyWentDown("space")&&gamelose===false){
        bullet1 = createSprite(plyr1.x+120,490,40,40)
        bullet1.addImage(bullet1Img)
        bullet1.scale=0.2
         bullet1.velocityX=15;
         bulletcount--;
         sound.play()

      }
for(var i=0;i<zombieGroup.length;i++){

      if(bullet1.isTouching(zombieGroup.get(i))&&gamelose===false){
            zombieGroup.get(i).destroy()
            bullet1.destroy();
            score++; 
      }
    }
    if(score===20)
    {
      zombiecry.loop();
      zombieGroup.destroyEach();
      gamewin.visible = true;
    }
    if(bulletcount===0||timer2===0)
    {
      zombieGroup.destroyEach();
      zombielaugh.play();
      gameover.visible = true;
    }
    if(plyr1.isTouching(zombieGroup))
    {
      zombielaugh.loop();
      zombieGroup.destroyEach();
      gamelose = true;
      gameover.visible = true;  
    }
    if(score === 10)
    {
    bomb.visible = true;
    }

    if(mousePressedOver(restart))
{
  score=0;
  bulletcount =21;
  timer1=0;
  timer2=30;
  gameover.visible = false;
  gamelose= false;
  zombielaugh.stop();
  theme.stop();

}
if(mousePressedOver(bomb))
{
  zombieGroup.destroyEach();
  blast.visible = true;
  bulletcount = bulletcount+1;
  bombtimer++;

}
if(mousePressedOver(gamewin))
{

  gamewin.visible = false;
  zombiecry.stop();
  gameState = "Level2";
}


if(bombtimer>=5){
bomb.visible = false;
blast.visible = false;
}
 }

 else if(gameState === "Level2")
 {
   background(bg2Img);
  level1title.visible = false;
  scoretitle.visible = false;
  bullettitle.visible = false;
   level2board.visible = true;
   coin2.visible = true;
   bulletcounttitle2.visible = true;
leftwall.visible = true;
rightwall.visible = true;
timerbg.visible = true;
Zombie1();
zombieGroup.collide(leftwall);
zombieGroup.collide(ground);
if(zombieGroup.isTouching(rightjumper))
{
//  zombieGroup.setVelocityXEach(0);
  zombieGroup.setVelocityYEach(5);

}
if(frameCount%10===0)
{
timer12++;
if(timer12%5===0&&score1!=20&&bulletcount1!=0&&timer22!=0&&gamelose===false)
{
  timer22--;
}
}
 if (keyWentDown("space")&&gamelose===false){
  bullet1 = createSprite(plyr1.x+120,477,40,40)
  bullet1.addImage(bullet1Img)
  bullet1.scale=0.2
   bullet1.velocityX=15;
   bulletcount1--;
   sound.play()
 }
 if(plyr1.isTouching(zombieGroup))
    {
      gamelose = true;
      zombielaugh.play();
      gameover1.visible = true;  
      zombieGroup.destroyEach();
    }
 

    for(var i=0;i<zombieGroup.length;i++){

      if(bullet1.isTouching(zombieGroup.get(i))&&gamelose===false){
            zombieGroup.get(i).destroy()
            bullet1.destroy();
            score1++; 
          }
            if(score1===20)
            {
              zombieGroup.destroyEach();
              zombiecry.play();
              gamewin1.visible = true;
              
            }
            if(bulletcount1===0||timer22===0)
            {
              zombieGroup.destroyEach();
              zombielaugh.play();
              gameover.visible = true;
            }
            if(plyr1.isTouching(zombieGroup))
            {
              zombieGroup.destroyEach();
              gamelose = true;
              zombielaugh.play();
              gameover.visible = true;  
            }
            if(score1 === 10)
            {
            bomb.visible = true;
            }
      }
    
      if(mousePressedOver(gamewin1))
      {
        zombiecry.stop();
        gamewin1.visible = false;
        gameState = "START";
        level2board.visible = false;
        coin2.visible = false;
        bulletcounttitle2.visible = false;
     leftwall.visible = false;
     rightwall.visible = false;
     timerbg.visible = false;
     timer12=0;
     timer22=30;
     score1=0;
     bulletcount1=21;
     
      }
      if(mousePressedOver(gameover1))
      {
        zombielaugh.stop();
        gameState = "START";
        level2board.visible = false;
        coin2.visible = false;
        bulletcounttitle2.visible = false;
     leftwall.visible = false;
     rightwall.visible = false;
     timerbg.visible = false;
     timer12=0;
     timer22=30;
     score1=0;
     bulletcount1=21;
     gameover1.visible=false;
     theme.stop();
      }
   
    }
 if (keyDown("left")) {
  plyr1.x = plyr1.x-5;
    }

    if (keyDown("right")){
      plyr1.x = plyr1.x+5
    }


  drawSprites();
   if(gameState==="level1"){
    textSize(40);
    textFont('Georgia');
    fill("orange");
    text(score + "/20", scoretitle.x-75,scoretitle.y+15);
    text(bulletcount, bullettitle.x-30,bullettitle.y+15);
    fill("yellow");
    text(timer2, bullettitle.x+40,bullettitle.y+15); 
  }
  else if(gameState==="Level2"){
    textSize(40)
    fill("yellow");
    text(score1 + "/20", coin2.x-75,coin2.y+15);
    text(bulletcount1, bulletcounttitle2.x-70,bulletcounttitle2.y+15);
    text("20", bulletcounttitle2.x+40,bulletcounttitle2.y+15);
    fill("brown");
    textSize(50)
    textFont('Georgia');
    text(timer22, timerbg.x-5,timerbg.y+35); 
  }

 console.log(gameState);

}
function Zombie(){
  if(World.frameCount%70 === 0&&gamelose===false){
    zombie = createSprite(width,513,40,40)
zombierandomcount=Math.round(random(1,3))
switch(zombierandomcount){
  case 1 :  zombie.addAnimation("zombieAnimation",zombieImg) 
  break;
  case 2 : zombie.addAnimation("zombie1Animation",zombie1Img)
  break;
  case 3 :  zombie.addAnimation("zombie2Animation",zombie2Img)
  break;
  default:break;
}
   
    zombie.scale=0.8
    zombie.velocityX=-5.5
    zombieGroup.add(zombie)
  }
}

function Zombie1(){
  if(World.frameCount%70 === 0){
    zombie = createSprite(width,height/2,40,40);
    zombie.setCollider("rectangle",0,0,zombie.width,300)
zombierandomcount=Math.round(random(1,3))
switch(zombierandomcount){
  case 1 :  zombie.addAnimation("zombieAnimation",zombieImg) 
  break;
  case 2 : zombie.addAnimation("zombie1Animation",zombie1Img)
  break;
  case 3 :  zombie.addAnimation("zombie2Animation",zombie2Img)
  break;
  default:break;
}
   
    zombie.scale=0.6
    zombie.velocityX=-5.5
    zombieGroup.add(zombie)
  }
}
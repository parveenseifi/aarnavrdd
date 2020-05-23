


var player, database;
var position;
var backgroundImage 
var bulletGroup,bulletGroup1;
var bullet1;
function preload(){
  horse=loadImage("horse.png")
  backgroundImage = loadImage("bg.jpg");
  
  
}
function setup(){
 
 
  createCanvas(800,800);

  player = createSprite(150,700,10,10);
  invground = createSprite(600,750,1200,10);

  enemy = createSprite(600,700,50,50);
  enemy.visible = false;

  player.shapeColor = "red";
  player.addImage("horse",horse);
  player.scale=0.1;

  bulletGroup = createGroup();
  bulletGroup1 = createGroup();

  score = 3;

 

}

function draw()
{
  background(backgroundImage);
 // Engine.update(engine);
  text(score,100,100)
  player.collide(invground);
  enemy.collide(invground)   ;

 

    if(keyDown(RIGHT_ARROW)){
      writePosition(+2,0);
    }
    else if(keyDown(UP_ARROW)){
      player.velocityY = -8;
    }
    
    player.velocityY = player.velocityY + 0.8;

    if (touches.length>0 || keyDown("space")) {
      createBullet(player.x);
      touche = [];
    }

   
        

    if(player.x > 150)
      {
          if(bulletGroup1!== null)
          {
          if(bulletGroup1.collide(player)) 
          { 
            score = score-1;
            }
          }
          
        enemy.visible = true;
        
        createBulletenemy(enemy.x);
        if(bulletGroup.isTouching(enemy))
        {
        enemy.destroy();
        bulletGroup1=null;
        }

        
      }

    drawSprites();
  
}


function writePosition(x,y)
{
  player.x = player.x + x;
  player.y = player.y + y;
  console.log(player.x);
  if (player.x < 800){
      bg="bg.jpg"
    }
    else{
      bg="bg2.jpg"
    }
    backgroundImage=loadImage(bg)


   
 
}

function createBullet(x) {
  var bullet= createSprite(100, 100, 5, 10);
  bullet.y = 700;
  bullet.x = x;                                           
  bullet.shapeColor = "red";
  bullet.velocityX = 5;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}

function createBulletenemy(x)
 {
  if(bulletGroup1!== null)
  {
    
    if(World.frameCount%50===0)
    {
      bullet1= createSprite(100, 100, 5, 10);
      bullet1.y = 700;
      bullet1.x = x;                                           
      bullet1.shapeColor = "red";
      bullet1.velocityX = -5;
      bullet1.lifetime = 1000;
      bulletGroup1.add(bullet1);
      bulletGroup1.x =bullet1.x;
      bulletGroup1.width =bullet1.width;
    }
  }
}


function hascollided(lplayer,lbullet)
{
  playerrightedge = lplayer.x + lplayer.width;
  bulletleftedge = lbullet.x;
  //text(bulletleftedge,200,200);
  if(bulletleftedge>playerrightedge)
  {
    return true;
  }
  else
  {
    return false;
  }
}
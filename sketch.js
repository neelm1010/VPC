var dog, happyDog, database, foodS, foodStock,happyDogImg,dogImg;


function preload()
{
  dogImg=loadImage("dogImg.png");
  happyDogImg=loadImage("dogImg1.png")
}

function setup() 
{
  createCanvas(500, 500);
  database=firebase.database();
  console.log("dog image")
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw()
{  

   
    background(46, 139, 87);

  if(keyWentDown("UP_ARROW"))
  {
  writeStock(foodS);
  dog.addImage(happyDogImg);

 
  }
  drawSprites();
}
function writeStock(x)
{
    if(x<=0){
  x=0
    }else{
      x=x-1
    }
  database.ref('/').update({
    Food:x
  })  
}

function readStock(data){
foodS=data.val();
}


function setup() {
  createCanvas(1200,800);
  fixrect=createSprite(200, 200, 50, 80);
  moverect=createSprite(400,200,80,30);
  fixrect.shapeColor="green";
moverect.shapeColor="green";
fixrect.debug=true;
moverect.debug=true;
}

function draw() {
  background(0,0,0);
    if(moverect.x-fixrect.x<=moverect.width/2+fixrect.width/2&&fixrect.x-moverect.x<=moverect.width/2+fixrect.width/2&&moverect.y-fixrect.y<=moverect.height/2+fixrect.height/2&&fixrect.y-moverect.y<=moverect.height/2+fixrect.height/2){
      fixrect.shapeColor="red";
      moverect.shapeColor="red";
    }else{
      fixrect.shapeColor="green";
    moverect.shapeColor="green";
  }
 moverect.x=World.mouseX;
 moverect.y=World.mouseY;
  drawSprites();
}
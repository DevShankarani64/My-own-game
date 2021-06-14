var bg,bg2,form,system,code,security;
var score=0;
 


function preload() {
 
  
  bg= loadImage("Images/Haunted House.jpg");
  //bg2= loadImage("treasure.jpg");
  
  
}

function setup() {
  createCanvas(1000,500);
  //security = new Security();
  //system = new System();
  
  
  
}

function draw() {
  background(bg);
  //clues();
  //security.display();
  textSize(20);
  fill("black");
  text("I HAVE YOUR FRIEND CAPTURED HAHAHA!! \n ANSWER THE QUESTIONS TO FIND HIM ", 300, 50);

  

    fill("Yellow")
    textSize(20);
    text("Press Space To Start",5, 200);
  

  drawSprites()
}
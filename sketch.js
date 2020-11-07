
// creating car and wall
   var car, wall;
  
// creating weight and speed
   var weight, speed;

function setup() {
  createCanvas(1600,400);

// Giving random numbers to weight and speed
   speed = random(55,100);
   weight = random(400,1500);

// creating car sprite and setting its color
   car = createSprite(50,200,70,50);   
   car.shapeColor = "white";

// creating wall and setting its shape color
   wall = createSprite(1500,200,60, height/2);
   wall.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);
  
// assigning velocity X to car
   car.velocityX = speed; 
   
// to detect the collision between car and wall and then what will happen
   if(wall.x-car.x < (car.width+wall.width)/2 ){
      car.velocityX = 0;

      // creating variable deformation here
      var deformation = 0.5 * weight * speed * speed/22509;

      // if deformation is bigger than 180 then the car color changes to blue
      if(deformation > 180){
         car.shapeColor = "blue";

         
      }

      // if the deformation is less than 180 and bigger than 100 then the car color changes to red
      if(deformation<180 && deformation>100){
         car.shapeColor = "red";
      }

      // if deformation is less than then 100 then the car color changes to green
      if(deformation<100){
         car.shapeColor = "green";

      }
   }




  drawSprites();
}
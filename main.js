canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630640405161I01_DXXX.jpg",
"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630310405128C00_DXXX.jpg",
"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630170405114C00_DXXX.jpg",];
random_number = Math.floor(Math.random() * 4);
background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);

rover_width = 100;
rover_height = 90;
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0 , 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
     if(keyPressed == '38'){
        up();
        console.log("up");
     }
     if(keyPressed == '40'){
        down();
        console.log("down");
     }
     if(keyPressed == '37'){
        left();
        console.log("left");
     }
     if(keyPressed == '39'){
        right();
        
        console.log("right");3
     }
   }
     function up(){
      if (rover_y >=0){
         rover_y = rover_y - 10;
         console.log("When up arrow is pressed, x = " + rover_x + " | y =" + rover_y);
         uploadBackground();
         uploadrover();
      }
     }
     function down(){
      if (rover_y <=500){
         rover_y = rover_y + 10;
         console.log("When up arrow is pressed, x = " + rover_x + " | y =" + rover_y);
         uploadBackground();
         uploadrover();
      }
   }
      function left(){
         if (rover_x >=0){
            rover_x = rover_x - 10;
            console.log("When up arrow is pressed, x = " + rover_x + " | y =" + rover_y);
            uploadBackground();
            uploadrover();
         }
        }
        function right(){
         if (rover_y <=700){
            rover_x = rover_x + 10;
            console.log("When up arrow is pressed, x = " + rover_x + " | y =" + rover_y);
            uploadBackground();
            uploadrover();
         }
      }

     

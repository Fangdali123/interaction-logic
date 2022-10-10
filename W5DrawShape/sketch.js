
let dotsRadius;
//angle
let dotsangle;
let dotsCount;

let dotCountValue;
let checkDotsCount;

var dotsCountSlider;
var moveAxisSlider;
var sinAngleMultiplySlider;
var angleDeltaSlider;
var dotRadiusSlider;


function setup() {

  dotsCountSlider = createSlider(200, 5000,1000,10);
  dotsCountSlider.position(40, 40);
  dotsCountSlider.addClass("mySliders");
  
  moveAxisSlider = createSlider(1, 15, 1, 0.1);
  moveAxisSlider.position(40, 80);
  moveAxisSlider.addClass("mySliders");

  sinAngleMultiplySlider = createSlider(0.1, 3, 1, 0.1);
  sinAngleMultiplySlider.position(40, 120);
  sinAngleMultiplySlider.addClass("mySliders");

  angleDeltaSlider = createSlider(2, 100, 5, 0.1);
  angleDeltaSlider.position(40, 160);
  angleDeltaSlider.addClass("mySliders");

  dotRadiusSlider = createSlider(2, 100, 2, 0.1);
  dotRadiusSlider.position(40, 200);
  dotRadiusSlider.addClass("mySliders");


  createCanvas(windowWidth, windowHeight);
  //base radius
 dotsRadius = 0.1;
  //angle
 dotsangle = PI/12;
 //dots count
 dotsCount = 0;
 
 dotCountValue = dotsCountSlider.value();
 checkDotsCount = dotCountValue;

}

function draw() {

  //let val = slider.value();
  //background(val);
  dotCountValue = dotsCountSlider.value();
  if(checkDotsCount != dotCountValue){
    dotsCount = 0;
    checkDotsCount = dotCountValue;
  }
  
  
  
  //console.log("dotcount "+ dotCountValue);
  //console.log("checkdotcount: "+ checkDotsCount);

  clear();
  background(0);
  if(dotsCount<dotCountValue){
    dotsCount+=10;
  }

  noSmooth();
  
  drawDots(dotsangle,dotsCount,dotsRadius);

}

function drawDots(dAngle,dCount,dR){
  let angle = dAngle;
  for(let i=0;i < dCount;i++){
    angle += angleDeltaSlider.value() / dR; //orinial:5/dR
    //stroke();
    fill(255,255*(1- i/dCount))
    circle(cos(angle)*dR+windowWidth/2,sin(angle)*dR+windowHeight/2, dotRadiusSlider.value());
    //console.log(cos(angle)*dR+500);
    dR = dR + 0.5 + sin(angle*sinAngleMultiplySlider.value()) * moveAxisSlider.value();
  }
}
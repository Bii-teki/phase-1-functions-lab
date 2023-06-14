// Code your solution in this file!
// Code your solution in this file!



let distance=43;
let height=50;

function distanceFromHqInBlocks(distance, height) {
    if(distance<42)
    {
return (42-distance);
    }
    else{
return (distance-42);
    }

    if(height<42)
    {
return (42-height);
    }
    else{
return (height-42);
    }
}


let pow =distance-42;


function distanceFromHqInFeet(pow) {
return (pow)*264;
}

let start = 43;
let stop = 48;
function distanceTravelledInFeet(start, stop) {

if (stop>start){
    return (stop-start)*264;
}
else{
    return (start-stop)*264;
}

}


let destination =1000;

function calculatesFarePrice(start,destination){
let totalDistance = distanceTravelledInFeet(start,destination);
if (totalDistance<= 400){
  return 0;
}
if (totalDistance>=400 && totalDistance<=2000){
  return (totalDistance-400)* 0.02;
}
else if(totalDistance>=2000&& totalDistance<=2500){
  return 25;
}
else if (totalDistance > 2500){
  return "cannot travel that far";
}
}


function distanceFromHqInFeet (width) {
return distanceFromHqInBlocks(width)*264;

}

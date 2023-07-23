


function distanceFromHqInBlocks(picklocation) {
  if (picklocation>=42){
   return picklocation-42
  }else{
    return  42-picklocation;
  }
}
function  distanceFromHqInFeet(picklocation){
 const feet=distanceFromHqInBlocks(picklocation);
  return 264*feet ;
}
function distanceTravelledInFeet(start, destination){
   const travelled=start-destination;
   return Math.abs(travelled * 264);
}
function calculatesFarePrice(start, destination){
  const feet=distanceTravelledInFeet(start, destination);
    if (feet <= 400){
      return 0;
  }else if (feet >= 400 && feet <=2000){
      return (feet-400)*0.02;
  }else if (feet > 2000 && feet <= 2500) {
      return 25;
  }else if (feet >= 2500) {
      return "cannot travel that far";
  }
}

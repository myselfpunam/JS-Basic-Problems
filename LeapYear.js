const leapYear=2000;
if(leapYear % 4 == 0 ){
  console.log("This is LEAP YEAR");
}
else if(leapYear % 400 == 0){
  console.log("This is LEAP YEAR");
}
else if(leapYear % 100 == 0){
  console.log("This is not LEAP YEAR");
}
else{
  console.log("This is not LEAP YEAR");
}
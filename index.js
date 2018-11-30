var katzDeliLine = [];
<<<<<<< HEAD
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
 console.log(`Welcome,${name}.You are number ${katzDeliLine.length} in line.`);
   return katzDeliLine;
=======
 katzDeliLine.push(name);
 katzDeliLine;
function takeANumber(katzDeliLine, name){
 
  return(`Welcome,${name}.You are number ${katzDeliLine.length} in line.`);
>>>>>>> 50e7314eba529379142f6b83e2137329af83e406
}
takeANumber(katzDeliLine, 'Ada');
takeANumber(katzDeliLine, 'Grace');
takeANumber(katzDeliLine, 'Kent');

<<<<<<< HEAD
function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
  console.log(`We are serving ${katzDeliLine.shift()}`);
  return katzDeliLine;}
  else if(katzDeliLine.length===0){
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(){
  var i=0;
 while( i<katzDeliLine.length){
   i++;
    console.log(`The line is currently: 1. Ada, 2. Grace`);
  }
  return
}
 
=======


>>>>>>> 50e7314eba529379142f6b83e2137329af83e406


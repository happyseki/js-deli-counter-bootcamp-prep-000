var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
 console.log(`Welcome,${name}.You are number ${katzDeliLine.length} in line.`);
   return katzDeliLine;
}
takeANumber(katzDeliLine, 'Ada');
takeANumber(katzDeliLine, 'Grace');
takeANumber(katzDeliLine, 'Kent');

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
  return(`We are serving ${katzDeliLine.shift()}`);
  }
  else if(katzDeliLine.length===0){
    return `There is nobody waiting to be served!`;
  }
}

 

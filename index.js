var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return(`Welcome,${name}.You are number ${katzDeliLine.length} in line.`);
}
takeANumber(katzDeliLine, 'Ada');
takeANumber(katzDeliLine, 'Grace');
takeANumber(katzDeliLine, 'Kent');
katzDeliLine;


function nowServing(katzDeliLine){
  for(var i=0;i<katzDeliLine.length;i++){
    console.log("Currently serving katzDeliLine[i].");
  
  }
    katzDeliLine.shift();
   console.log("There is nobody waiting to be served!");
  }

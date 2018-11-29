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
 if(katzDeliLine.length > 0){
   console.log("We are serving katzDeliLine[0].");
  katzDeliLine.shift();
   return katzDeliLine;
 }
 else {
   console.log("There is nobody waiting to be served!");
   return katzDeliLine;
  }
}
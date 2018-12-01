var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
return`Welcome,${name}.You are number ${katzDeliLine.length} in line.`;
}
<<<<<<< HEAD
 function nowServing(katzDeliLine){
  if (!katzDeliLine.length){return "There is nobody waiting to be served!";
    } else {   return `Currently serving ${katzDeliLine.shift()}.`; }
}
 function currentLine(katzDeliLine){
   if (!katzDeliLine.length ){ return "The line is currently empty."; }
  else {
    var output = "The line is currently:";
     for(var i=0; i<katzDeliLine.length; i++){
       output += ` ${i+1}. ${katzDeliLine[i]}`;
       if (i < katzDeliLine.length - 1){ output += ',';}
     }
    return output;
   }
 }
=======
 takeANumber(katzDeli, 'Ada');
 takeANumber(katzDeli, 'Grace');
 takeANumber(katzDeli, 'Kent');
 
function nowServing(katzDeliLine){

if(katzDeliLine.length>0){
   return`Currently serving ${ katzDeliLine.shift()}`;
    }
  else{
    return `There is nobody waiting to be served!`;
  }
}
>>>>>>> 30c93fb91f804f20caece4872ae7a9a36a47d1bf

function currentLine(katzDeliLine){
   if(katzDeliLine.length===0){
    return `The line is currently:empty.`;}
   else {
  var line=`The line is currently:`;
  for(var i=0;i<katzDeliLine.length;i++){
   line += `${(i+1)}.${katzDeliLine[i]}`;
     if(i<katzDeliLine.length-1){
    line +=`,`; }
     return line;
    }
  }
}

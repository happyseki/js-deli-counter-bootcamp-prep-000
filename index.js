var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
return`Welcome,${name}.You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine
){
  if(katzDeliLine.length>0){
<<<<<<< HEAD
  var output=`Currently serving ${katzDeliLine[0]}`;
 katzDeliLine.shift();
 return output;
=======
  return`Currently serving ${katzDeliLine.shift()}`;
>>>>>>> d4cb035897a891f6eb71d41d5ddf8ae7700872de
  }
  else if(katzDeliLine.length===0){
    return `There is nobody waiting to be served!`;}
}
function currentLine(){
  if(katzDeliLine.length>0){
       var array = [];
  for(var i=0;i<katzDeliLine.length;i++){
  array.push(`${(i+1)}.${katzDeliLine[i]}`);
   return`The line is currently:${array}`;
  }
<<<<<<< HEAD
    }
    else if(katzDeliLine.length===0){
    return `The line is currently empty.`;}
}

=======
  
}
nowServin(katzDeliLine);
 
>>>>>>> d4cb035897a891f6eb71d41d5ddf8ae7700872de

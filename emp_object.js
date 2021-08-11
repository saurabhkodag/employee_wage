const con= require('./constant')
let empobject=[];
function hrs(key){
  switch(key){
      case 0:
      emphrs=con.fulltime;
      break;
    case 1:
      emphrs=con.parttime;
      break;
    default:
      emphrs=0;
  }
  return emphrs;
  }
var emphrs=0;
var empwage=0;
var totalhrs=0;
var i=0;
while(i<=20){
let key =Math.floor(Math.random()*10%3)
  emphrs=hrs(key);
  totalhrs+=emphrs;
let empw=emphrs*con.wageperhour;
empobject.push({
    'Day':i,
    'Wage':empw,
    'Hours worked':emphrs

})
if(totalhrs>=160)
break;
i++;
}
i--;

console.log(empobject);


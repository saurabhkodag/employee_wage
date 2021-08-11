const con= require('./constan')
let wage=[];
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
  empwage+=emphrs*con.wageperhour;
wage.push(empwage);
if(totalhrs>=160)
break;
i++;
}
i--;
console.log("DAY",i,"EmpHr:",totalhrs, "EmpWage:",empwage);
console.log(wage);

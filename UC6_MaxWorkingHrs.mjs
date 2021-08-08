import { fulltime, parttime, wageperhour } from './constan.mjs';
var emphrs=0;
var empwage=0;
var totalhrs=0;
var i=0;
while(i<=20){
let key =Math.floor(Math.random()*10%3)
switch(key){
    case 0:
    emphrs=fulltime;
    break;
  case 1:
    emphrs=parttime;
    break;
  default:
    emphrs=0;
}
  totalhrs+=emphrs;
  empwage+=emphrs*wageperhour;

if(totalhrs>=160)
break;
i++;
}
i--;
console.log("DAY",i,"EmpHr:",totalhrs, "EmpWage:",empwage);
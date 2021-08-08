console.log("welcome to employee wage compatation");
function attendance_check(){
const is_Absent=0;
let emp=Math.floor(Math.random()*10%2)

if(emp==true){
    console.log("present");
}
else{
    console.log("absent");
}
}
function Daily_Wage(){
    let fulltime=8;
let wageperhour=20;
let empwage=0;
empwage=fulltime*wageperhour;
console.log(empwage);
}
function Part_time(){
    let parttime=8;
    let wageperhour=20;
    let empwage=0;
    empwage=parttime*wageperhour;
    console.log(empwage);  
}
function Switchcase(){
    let fulltime=8;
let parttime=4;
let wageperhour=20;
let emphrs=0;
let empwage=0;
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
empwage+=emphrs*wageperhour;
console.log(empwage);
}
function Monthly_Wage(){
    let fulltime=8;
let parttime=4;
let wageperhour=20;
let emphrs=0;
let empwage=0;
let i=1;
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
empwage+=emphrs*wageperhour;
i++;
}
console.log(empwage);
}
function MaxWorkingHrs(){
    let fulltime=8;
    let parttime=4;
    let wageperhour=20;
   // import{fulltime, parttime, wageperhour} from './constan.mjs';
function hrs(key){
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
  empwage+=emphrs*wageperhour;

if(totalhrs>=160)
break;
i++;
}
i--;
console.log("DAY",i,"EmpHr:",totalhrs, "EmpWage:",empwage);
}
var key=2;

switch(key){
    case 1:
        attendance_check();
    break;
    case 2:
        Daily_Wage();
    break;
    case 3:
        Part_time()
    break;
    case 4:
        Switchcase();
    break;
    case 5:
        Monthly_Wage();
    break;
    case 6:
        MaxWorkingHrs();
    break;
    default:
        
    break;

}
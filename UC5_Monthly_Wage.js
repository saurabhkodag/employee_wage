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
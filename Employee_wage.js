//UC1_Attendance_check
{
  const is_Absent=0;
let emp=Math.floor(Math.random()*10%2)

if(emp==true){
    console.log("present");
}
else{
    console.log("absent");
}
}
//UC2_Daily_Wage
{
  let fulltime=8;
let wageperhour=20;
let empwage=0;
empwage=fulltime*wageperhour;
console.log(empwage);
}
//UC4__Switchcase
{
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
//UC5__Monthly_Wage
{
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
//UC6_MaxWorkingHrs
{
  const con= require('./constant')
var emphrs=0;
var empwage=0;
var totalhrs=0;
var i=0;
while(i<=20){
let key =Math.floor(Math.random()*10%3)
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
  totalhrs+=emphrs;
  empwage+=emphrs*con.wageperhour;

if(totalhrs>=160)
break;
i++;
}
i--;
console.log("DAY",i,"EmpHr:",totalhrs, "EmpWage:",empwage);
}
//UC7__Empfunction
{
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
}
//UC8_Employee_Wage
{
  const con= require('./constant')
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
}
//UC9_Daily_Wage
{
  const con= require('./constant')
let wage=[];
let mp = new Map();
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
var i=1;
while(i<=20){
let key =Math.floor(Math.random()*10%3)
  emphrs=hrs(key);
  totalhrs+=emphrs;
  let dailyw=emphrs*con.wageperhour;
  empwage+=dailyw;
  mp.set(i,dailyw);
wage.push(dailyw);
if(totalhrs>=160)
break;
i++;
}
i--;
function total_wage(){
  console.log("total Wage using Array forEach or reduce method");
console.log(wage);
let sum = 0;
wage.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum);
}
function  daywage(){
  console.log(" Day along with Daily Wage using Array map");
  /*mp.forEach((value, key) => {
    console.log(key+" "+value);
})*/
var newArr = wage.map(function(val, index){
  return {Day:index, Wage:val};
})
console.log(newArr);
}
function full(){
  console.log(" Days when Full time wage of 160 were earned");
  mp.forEach((value, key) => {
    if(value==160)
    console.log(key);
})
console.log(wage);
function w(val,index) {
  if(val == 160)
  return index;
}
console.log(" Days when Full time wage of 160 were earned");
var newArr = wage.map(function(val, index){
  return {Day:index, Wage:val};
})
  var filtered = newArr.filter(item => item.Wage==160);
  console.log(filtered);

}
function firstfull(){
  var newArr = wage.map(function(val, index){
    return {Day:index, Wage:val};
  })
  let ff=newArr.find(function(val,index){
    if(val.Wage==160)
    return index;
  })
  console.log(ff);
}
function fullexist(){
  let p=wage.indexOf(160);
if(p!=-1)
console.log("full time exist");
else
console.log("full time does not exist");
}

function part(){
  let p=wage.indexOf(80);
if(p!=-1)
console.log("part time exist");
else
console.log("part time does not exist");
}
function day(){
  console.log("days=", i-present);
}
//console.log("DAY",i,"EmpHr:",totalhrs, "EmpWage:",empwage);
let key=7;
let present=0;
switch(key){
  case 1:
    present++
    total_wage();
  break;
  case 2:
    present++;
    daywage();
  break;
  case 3:
    full();
  break;
  case 4:
    firstfull();
  break;
  case 5:
    fullexist();
  break;
  case 6:
    part();
  break;
  case 7:
    day();
  break;
}
}
//UC10_Employee_Map
{
  const con= require('./constant')
let mp = new Map();
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
mp.set(i,empw);
if(totalhrs>=160)
break;
i++;
}
i--;
let sum=0
mp.forEach((value, key) => {
    sum+=value;
})
console.log(mp);
console.log(sum);
}
//UC11_Employee_Object
{const con= require('./constant')
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

}

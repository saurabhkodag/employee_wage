const con= require('./constan')
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







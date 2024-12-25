function subtract(a,b)
{
return a-b
}
let minus = subtract(7,2)
console.log("minus function :::  " +minus)
//2nd tyoe of calling n writing a fun
let sumofint = function(c,d){
return c+d
}
console.log("sum othertype of calling a function ::  " +sumofint(5,4))
//3rd type= anynimonus
let total = (c,d)=>c+d
let sub = (x,y)=>x-y

console.log("anonymus fun calling ::   " +total(3,4))
console.log("anonymus fun calling ::   " +sub(13,4))
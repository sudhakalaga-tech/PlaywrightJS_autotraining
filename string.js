const Person = require('./classobj')
let day= ' sunday  '
console.log("day length : " +day.length)
let subday= day.slice(0,4)
console.log("substring :" +subday)
let splitday = day.split("s")
console.log("splitting:" +splitday)
//console.log(day[1].length)
console.log(day.trim().length)

let date='20'
let nextdat='24'
let diff = parseInt(nextdat)-parseInt(date)
console.log("integer" +diff)
console.log("string " +diff.toString())

let newdef = day+"is my day"+"  is holiday"
console.log(newdef)

/*let val = newdef.indexOf("day")//4
//console.log(val)
//how many days in our string
//if day not found it  reurns -1
let count =0
 
while(val!= -1)
{
count++
val= newdef.indexOf("day",val+1)
console.log("incremented val value : " +val)
}
console.log(count)

*/
let person1= new Person("Koushiki"," G")
console.log(person1.location)
person1.fullname()

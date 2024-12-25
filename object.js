//object is a collection of properties
//key value pair as property


let person ={
firstname : 'sudha1',
lastname : 'kalaga2',
profession : 'employee',
age : 33,
fullname : function(){
    console.log("this method returns full name and all thr properties of a person")
    console.log(this.firstname+this.lastname)

    }   
}
console.log(person.fullname())
console.log(person.lastname)
console.log(person['age'])
console.log("firstname b4edit : " +person.firstname)
//edit
/*person.firstname = 'venkata sudha'
console.log(person.firstname)
//add new
person.gender='female'
console.log(person)
delete person.gender
console.log(person)

//checking property
console.log('gender' in person)//direct

//write values of all properties
for(let key in person){
console.log(person[key])
*/


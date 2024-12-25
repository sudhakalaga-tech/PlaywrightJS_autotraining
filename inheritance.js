//inheritance main pillar of oops
//one class can inherit all prop,methiods of another class
//sub class and super class
const Person= require("./classobj")
class Pet extends Person
{
  get location2(){
  return "bluecross"
 }

    constructor(firstname,lastname){
        //call parent clas constroctor
        super(firstname,lastname)
    }

}
let pet1= new Pet("tommy"," sss")
pet1.fullname()
console.log("sub class: pet class " +pet1.location2)
console.log("super class: person class " +pet1.location)

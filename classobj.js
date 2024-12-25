module.exports = class persons{
    age=22
    location1= "USA"
    //property by geter
    get location()
    {
    return "Canada"
    }

    //persons(fn,ln)
    //constructor - default method executes when obj z created
    
    constructor(x,y)
    {
    // without this only instant, with this we can use anywhere
    this.firstname= x
    this.lastname= y
    }
    
    fullname(){
    console.log(this.firstname+this.lastname)
    }
    
}

/*let person11= new persons("lilly","gudimedla")
let person1= new persons("saf","kal")
let person3= new persons("testing","man n auto")
    console.log(person11.age)
    console.log(person11.location)
    console.log(person1.fullname())
    console.log(person3.fullname())
  */  
    
const { run } = require("node:test")
const { constrainedMemory } = require("process")

var marks = Array[6]
var marks= new Array(5,4,3,2,1,6)

var marks1= [5,5,5,7,8]

var l1=[]//empty array

//>31-50 -b, > 51-80-A
//index -- memory

var sum = 0
for(var i=0;i<marks.length;i++){
   // console.log("before: " +sum)marks[0]=5=sum5,
    sum = sum+ marks[i]//5+4=9sum,9+3=12,12+2=14+1+6=21
    console.log("after value being added" +sum)
}


//reduce filter map
let totalsum = marks1.reduce((sum1,x)=>sum1+x,3)

//let total = marks1.reduce((sum,mark)=>sum+mark,0)
console.log("reduce fun: " +totalsum)

//scores- even nos
var scores = [12,13,14,16,18,19,21,23,22,24,25,27,28]
var evenscores= [] //12,14,16.. 
var oddscores=[]
for(var i=0;i<scores.length;i++){
 //let m=scores[i]*3

    if(scores[i]%2==0){
        evenscores.push(scores[i])
    }else{
        oddscores.push(scores[i])
    }
}
//evnsc== 12,14,16,18,22,24
console.log("even scores  :: " +evenscores)
console.log("odd scores :  " +oddscores)
console.log("8******")
let newfil= scores.filter((even=>even%2==0))
console.log(newfil);
//12,14

//map
var mult= []
var x=0
for(var i=0;i<scores.length;i++){
mult.push(scores[i]*3) 
}
console.log("multiles of 3 are :  ****")
console.log(mult);

let mappedarray  = scores.map(x=>x*3)
console.log(mappedarray)

let totalval = mappedarray.reduce((sum,val)=>sum+val,0)
console.log(totalval)

let total = scores.filter((even=>even%2==0)).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log("total :" +total)

let fruits =["banana","mango","custardappl","guava","watermelon","pineappl","apple"]
fruits.sort()
console.log(fruits)
var revarr=[]
var len=scores.length;//10,i=9
for(i=len-1;i>=0;i--){
revarr.push(scores[i])
}
console.log("revsd arra = " +revarr)

let a= "apple"
//let b = a.reverse()
console.log(scores.reverse())
//console.log(b)
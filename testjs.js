
//tables 2 5
console.log ("*****table")
let s
let n = 2;
let k=1;
for(s=1;s<=20;s++){
    //logical ope true/false /-quotiet, %-reminder
//2*1,2*2
        if( s%2 == 0){
             //1%2==fa, tr,fa,tr
                         console.log(n+"*"+k+"="+s )
        //console.log("s ===" +s)
        k++;
    }
}

//declaring with 3 variables(var,let,const) and printing thhose types 
//do addition, multiplication with those values - int, decimal
//2,3== multiplied...10,20,30,40,  6,12,18,24
let i,j
console.log("multipled double condition")
for(i=1;i<=40;i++){
    if((i%2==0)&&(i%3==0)){
        console.log("multiples of 2 and 3 : " +i)
    }

}
//3,6,9,... 5,10,15
console.log("   OR .....")
for(i=1;i<=40;i++){
    if((i%3==0)&&(i%6!=0)){
        console.log("multiples of 5 and 3 : " +i)
    }

}
//5 table
//multioles of 3&6 --6 12 18 
//multiples of either of 4 and 7--28(50)
// FAULTY Calculator
/* 
Create a faulty calculator using JS
this faulty does the follow, take 2 numbers from the user as an input
it performs wrong operations as follows: 
 + -----> *
 * -----> +
 - -----> /
 / -----> **
*/

let x = Math.random()
console.log(x)

function calculate_correct(num1, num2){
    console.log("The sum of two numbers " +num1 +" and " + num2 +" is ", (num1+num2))
    console.log("The difference of two numbers " +num1 +" and " + num2 +" is ", (num1-num2))
    console.log("The product of two numbers " +num1 +" and " + num2 +" is ", (num1*num2))
    console.log(num1+" raised to the power of "+ num2 +" is ", (num1**num2))
}

function calculate_faulty(num1, num2){
    
    console.log(x + "it is faulty")
    console.log("The sum of two numbers " +num1 +" and " + num2 +" is ", (num1*num2))
    console.log("The difference of two numbers " +num1 +" and " + num2 +" is ", (num1/num2))
    console.log("The product of two numbers " +num1 +" and " + num2 +" is ", (num1+num2))
    console.log("The quotient of two numbers " +num1 +" and "+ num2 +" is ", (num1**num2))


}

if (x<0.1){
    calculate_faulty(10, 2)
}
else{
    calculate_correct(10, 2)
}

//Declaration_and_definition funtion

// function functionName(parameter){

//     return ans
// }
// console.log(return)



//Q.1 To find the factorial of a number



function fact(num){
    let fact = 1;
    for(let i = num; i>0; i--){
        fact*=i;
    }
    return fact;
}
console.log(fact(5))
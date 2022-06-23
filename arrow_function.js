//Arrow_function


// let functionName =(parameter)=>{

//     return ans
// }

let facto=(num)=>{
    let fact = 1;
    for(let i=num;i>0;i--){
        fact*=1;
    }
    return fact
}
let ans = facto(5);
console.log(ans);
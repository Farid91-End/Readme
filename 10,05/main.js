// const a = "Farid";
// let age = 26;
// console.log(a);
// console.log(`age is ${age}`);
// console.log(typeof age);

// let c = 2+2+'2';
// console.log(typeof(2*2+" "+'Safar'));
// console.log(2+'2'+2+2+2+2);



function decloration(a,b){
    return a+b;
}
console.log(decloration(1,3));


let expression=(a,b)=>{
    return a+b
}
console.log(expression(1,5));

let expression2=function(a,b){
    return a+b
}
console.log(expression2(1,9));


(function(a,b){
    console.log(a+b);
})
(5,7)
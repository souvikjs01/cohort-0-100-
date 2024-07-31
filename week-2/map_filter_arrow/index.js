// const input = [1,2,3,4,5]
// const newArr = [];
// for(let i=0; i<input.length; i++){
//     newArr.push(input[i]*2);
// }
// console.log(newArr);

// MAP
// const input = [1,2,3,4,5];
// function transform(i){
//     return i*2;
// }
// const ans = input.map(transform);
// console.log(ans);
// or we can write
// const ans = input.map((i)=>{
//     return i*2;
// })
// console.log(ans);

// filerting
const arr = [1,2,3,4,5,6,7,8,9,10];

const ans = arr.filter(function filterLogic(n){
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);

const myArr = ["harkirat", "souvik", "sampriti", "shubhradip", "lipika"];
const myAns = myArr.filter((n)=>{
    if(n.startsWith("s")){
        return n;
    }
})
console.log(myAns);
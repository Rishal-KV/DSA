// function sum(arr,target){
//  for(let i = 0; i < arr.length-1; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if(arr[i]+arr[j]==target){
//             return [arr[i],arr[j]]
//         }
//     }
//  }
//  return "no target found"
// }

// let arr = [4,6,1,2,23]
// let target = 10;
// console.log(sum(arr,target));


//using set 

//time complexity big O(n)
//space complexity big O(1)

// let arr  = [6,10,3,4,5];
// let target = 10;
// let set = new Set([]);
// for(let i = 0; i < arr.length; i++){
//        let num = arr[i];
//        let match = target - num;
//        if(set.has(match)){
//   console.log(num,match);
//        }else{
//         set.add(num)
//        }
// }


let arr =[1,2,3,6,2,3,6,6,9,6];
for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i]===6){
        arr.splice();
        arr.push(6)
    }
}
console.log(arr)
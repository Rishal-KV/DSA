let arr = [1,2,3,2,2,3,3,3,3,3,3];
let map = new Map()

for(let i = 0; i < arr.length; i++){
    if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1);
    }else{
        map.set(arr[i],1)
    }
}



    let maxFrequencyElement = null;
    let max = 0
    for(let [key,value] of map){
        if (value > max) {
           max = value 
           maxFrequencyElement = key
        }
    }
  



let str = "MALAYALAM"
function isPal(start,str,end){
    if(start > end){
        return  true;
    }

    if(str[start] != str[end]){
        return false;
    }

    return isPal(start + 1, str, end - 1);
}

console.log(isPal(0, str, str.length - 1));
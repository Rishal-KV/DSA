let str = "MALAYALAM"
let flag = 1
for(let i = 0; i < str.length/2; i++){
    if (str[i]!=str[str.length - i - 1]) {
       
        flag = 0
        break
    }
}
if (flag == 1) {
    console.log(str + " is a palindrome");
}else{
    console.log(str+ " not a palindrome");
}
const palindromes = function (str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        if(isAlpha(str[i]))
            newStr += str[i].toLowerCase();
    }
    let left = 0;
    let right = newStr.length - 1;
    while(left < right){
        if(newStr[left] === newStr[right]){
            left++;
            right--;
            continue;
        }
        return false;
    }
    return true;
};

const isAlpha = function(ch) {
    return (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z");
}

// Do not edit below this line
module.exports = palindromes;

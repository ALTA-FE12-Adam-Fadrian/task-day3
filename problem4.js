function palindrome(string) {
    let reversed = string.split("").reverse().join("");
    if(reversed === string) return true;
    return false
}

console.log(palindrome("civic"));
console.log(palindrome("katak"));
console.log(palindrome("kasur rusak"));
console.log(palindrome("kupu-kupu"));
console.log(palindrome("lion"));


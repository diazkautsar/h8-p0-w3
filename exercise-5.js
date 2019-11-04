function palindrome(kata) {
    var output = ""
    var hasil;
    for (var i = 1; i <= kata.length; i++) {
        output += kata[kata.length - i]
        if (output === kata) {
            hasil = true
        } else {
            hasil = false
        }
    }
    return hasil
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
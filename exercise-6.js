function angkaPalindrome(num) {
    // you can only write your code here!
    var change = num.toString()

    output = "";

    for (var j = 1; j <= change.length; j++) {
        output += change[change.length - j]
    }
    if (change === output) {
        change2 = num + 1
        change3 = change2.toString()
        output += change3
    }
    while (change !== output) {
        num++
        var change = num.toString()

        output = "";
        for (var j = 1; j <= change.length; j++) {
            output += change[change.length - j]
        }
    }
    return output
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
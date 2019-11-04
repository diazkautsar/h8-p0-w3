function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    output = [];
    hasil = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (i === 0) {
            output[i] = arr[i + 1] - arr[i]
        } else {
            output[i] = arr[i] - arr[i - 1]
        }
    }
    for (var j = 0; j < output.length; j++) {
        hasil += output[j]
    }
    if (hasil / output.length === output[0]) {
        return true
    } else {
        return false
    }
}

  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
function targetTerdekat(arr) {

    output = "";
    hasil = 0;
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === `o`) {
            for (var k = [i]; k < arr.length; k++) {
                if (arr[k] === `x`) {
                    hasil = [k] - [i]
                    break;
                } else {
                    hasil += 0
                }
            }
            for (var l = [i]; l >= 0; l--) {
                if (arr[l] === `x`) {
                    hasil = [i] - [l]
                    break;
                } else {
                    hasil = hasil + 0
                }
            }
        }
    }
    return hasil
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
function pasanganTerbesar(num) {
    // you can only write your code here!
    var keStringDulu = num.toString();
    var arrayBaru = [];
    for (var i = 0; i < keStringDulu.length - 1; i++) {
        penampung = keStringDulu[i] + keStringDulu[i +1]
        keNumber = Number(penampung)
        arrayBaru.push(keNumber)
    }

    var nilaiMax = arrayBaru[0]
    for (var j = 0; j < arrayBaru.length; j++) {
      if (arrayBaru[j] > nilaiMax) {
        nilaiMax = arrayBaru[j]
      }
    }

    return nilaiMax

}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
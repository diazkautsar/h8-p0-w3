// function hitungJumlahKata(kalimat) {
//     // you can only write your code here!
//   var hasil = 0
//   for (var i = 0; i < kalimat.length; i++) {
//     if (kalimat[i] === ' ') {
//       hasil++
//     }

//     if (kalimat.length - 1 === i) {
//       hasil++
//     }
//   }
//   return hasil
// }

function hitungJumlahKata2(kalimat) {
  hasil = 0;
  var kumpulan = "";
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== ' ' ) {
      kumpulan += kalimat[i]
    } else if (kalimat[i] === ' ') {
      if (kumpulan.length > 0) {
        hasil++
        kumpulan = ``;
      }
    }
    if (kalimat.length - 1 === i) {
      hasil++
    }
  }
  return hasil
}
  
  // TEST CASES
  console.log(hitungJumlahKata2('I have    a dream')); // 4
  console.log(hitungJumlahKata2('Never     eat      shredded wheat or cake')); // 6
  console.log(hitungJumlahKata2('A song to sing')); // 4
  console.log(hitungJumlahKata2('I')); // 1
  console.log(hitungJumlahKata2('I believe I can code')); // 5
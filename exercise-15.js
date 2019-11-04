function groupAnimals(animals) {
  // you can only write your code here
 var hasil = [];
 var arr1 = [];
 animals.sort();
 var hurufAwal = animals[0][0];
 for(var i = 0 ; i < animals.length ; i++){
   // hurufAwal = animals[i][0]
   if(animals[i][0]=== hurufAwal){
     arr1.push(animals[i]);
   } else {
     hasil.push(arr1);
     arr1 = [];
     hurufAwal = animals[i][0];
     arr1.push(animals[i])
   }
 }
 hasil.push(arr1)
 return hasil

  // var output = [];
  
  // for (var i = 0; i < animals.length; i++) {
  //   var sama = 0
  //   if (i === 0) {
  //     output.push(animals[i])
  //   } else {
  //     for (var j = 0; j < output.length; j++) {
  //       if (animals[i] === output[j]) {
  //         sama++
  //       } 
  //     }

  //     if (sama === 0) {
  //       output.push(animals[i])
  //     }
  //   }
  // }
  // return output

  
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

console.log(groupAnimals([`ayam`, `cacing`, `anoa`, `ayam`, `sapi`, `cacing`, `zebra`, `ayam`]))
// [`ayam`, `cacing`, `anoa`, `sapi`, `zebra`]
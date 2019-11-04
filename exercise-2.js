function balikString(kata) {
    var hasil = "";
    for (var i = 1; i <= kata.length ; i++) {
        hasil += kata[kata.length - i]
    }
    return hasil
}
console.log(balikString("hello world!"))
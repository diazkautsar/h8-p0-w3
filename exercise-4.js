var masukan = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(masukan) {
    masukan.splice(1, 1, "Roman Alamsyah Elsharawy")
    masukan.splice(2, 1, "Provinsi Bandar Lampung")
    masukan.splice(4, 2, "Pria", "SMA Internasional Metro")
    console.log(masukan)

    var hasilPisahTanggal = masukan[3].split("/")
    // console.log(hasilPisahTanggal)

    var hasilPisahTanggal2 = masukan[3].split("/")
    
    var pergantianBulan = "";
    switch (parseInt(hasilPisahTanggal[1])) {
        case 1:
            pergantianBulan = "Januari"
            break
        case 2:
            pergantianBulan = "Februari"
            break
        case 3: 
            pergantianBulan = "Maret"
            break
        case 4:
            pergantianBulan = "April"
            break
        case 5:
            pergantianBulan = "Mei"
            break
        case 6:
            pergantianBulan = "Juni"
            break
        case 7:
            pergantianBulan = "Juli"
            break
        case 8: 
            pergantianBulan = "Agustus"
            break
        case 9: 
            pergantianBulan = "September"
            break
        case 10:
            pergantianBulan = "Oktober"
            break
        case 11: 
            pergantianBulan = "November"
            break
        case 12:
            pergantianBulan = "Desember"
    }
    console.log(pergantianBulan)

    var pengurutan = hasilPisahTanggal
    pengurutan.sort(function(a, b){return b-a})
    console.log(pengurutan);

    var mengubahKeString = hasilPisahTanggal2.join("-")
    console.log(mengubahKeString)

    var irisan = masukan[1].slice(0,15);
    console.log(irisan)
}

dataHandling2(masukan)
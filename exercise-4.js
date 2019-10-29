var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    var spliceInput = input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);
    
    var sliceTanggal = input[3].slice(3, 5)
    switch (sliceTanggal) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('Novermber');
            break;
        case '12':
            console.log('Desember');
        break;
            default:
            console.log('Tidak diketahui');
    }
    var splitTanggal = input[3].split('/');
        splitTanggal.reverse();
        splitTanggal.splice(1, 2, splitTanggal[2],splitTanggal[1])
    console.log(splitTanggal);

    var splitTanggal2 = input[3].split('/');
    var tanggalGabung = splitTanggal2.join('-');
    console.log(tanggalGabung);

    var sliceNama = input[1].slice(0, 14);
    console.log(sliceNama);
}

dataHandling2(input);
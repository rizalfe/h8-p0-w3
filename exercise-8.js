function pasanganTerbesar(num) {
    var jadiString = num + '';
    
    var hasil = [];
    hasil = jadiString.split('');

    var temp = [];
    for (var a = 0; a < hasil.length-1; a++) {
        temp[a] = hasil[a] + hasil[a + 1];
    
    var angkaTerbesar = temp.sort(function (a, b) {
        if (a > b) {
            return -1;
        } else {
            if (a < b) {
                return 1;
            }
            return 0;
        }
      });
    }
    return angkaTerbesar[0];
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
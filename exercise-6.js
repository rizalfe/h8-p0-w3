function angkaPalindrome(num) {

    for (var a = 0; a < num; a++) {
        num++;

        var hasil = '';
        var ubahString = String(num);
        for (b = ubahString.length-1; b >= 0; b--) {
            hasil += ubahString[b];
        }

        var jadiNumber = Number(hasil);   
        if (jadiNumber === num) {
        return hasil;
        }
    }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
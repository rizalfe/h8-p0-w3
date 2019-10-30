function palindrome(kata) {
    var hasil = '';
    for (var a = kata.length-1; a >= 0; a--) {
        hasil += kata[a];
        if (hasil === kata) {
            return true;
        }
      }
    return false;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
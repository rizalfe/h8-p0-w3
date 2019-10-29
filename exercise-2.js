//Mengakses nilai dalam array//

function balikString(words) {
    var hasil = [];
    for(a = words.length; a >= 0; a--) {
        hasil.push(words[a]);
    }
    return hasil.join('');
}

console.log(balikString('Hello World!'));
////Target Terdekat////

function targetTerdekat(arr) {
    var indexO = [];
    var indexX = [];

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] == 'o') {
            indexO.push(a);
        } else {
            if (arr[a] == 'x') {
            indexX.push(a);
            }
        }
    }

    if (indexX.length == 0) {
        return 0;
    }

    var box = [];
    for (var c = 0; c < indexX.length; c++) {
        box[c] = Math.abs(indexX[c] - indexO);
    }

    var temp = [];
    for (var i = 0; i < box.length-1; i++) {
        for (var j = 0; j < box.length-1-i; j++) {
            if (box[i] < box[j + 1]) {
                temp = box[j];
                box[j] = box[j+1];
                box[j+1] = temp;
            }
        }
    }
    return box[box.length-1];
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
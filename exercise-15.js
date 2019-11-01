////Mengelompokkan Hewan////

function groupAnimals(animals) {
   var hewanA = [];
   var hewanC = [];
   var hewanK = [];
   var hewanU = [];
   var hasil = [hewanA,hewanC,hewanK,hewanU];

   for (var a = 0; a < animals.length; a++) {
           if (animals[a][0] == 'a') {
               hewanA.push(animals[a]);
           } else {
               if (animals[a][0] == 'c') {
                   hewanC.push(animals[a]);
               } else {
                   if (animals[a][0] == 'k') {
                       hewanK.push(animals[a]);
                   } else {
                       if (animals[a][0] == 'u') {
                           hewanU.push(animals[a]);
                       }
                   }
               }
           }
       }
   return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
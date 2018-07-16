
function groupAnimals(animals) {
  // you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var kandangUtama = []
    for (var i = 0; i < abjad.length; i++) {
        //console.log(abjad[i] + ' check abjad')
        var kandangAbjad = []
        for (var j = 0; j < animals.length; j++) {
            //console.log(animals[j] + ' check animals')
            if (abjad[i] === animals[j][0]) {
                kandangAbjad.push(animals[j])
                //console.log(kandangAbjad + ' kondisi Kandangabjad')
            }
        }
        
        if (kandangAbjad.length !== 0) {
            kandangUtama.push(kandangAbjad)
        }
       // console.log('kondisi utama ' + kandangUtama)
    }
    return kandangUtama
    
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

function groupAnimals(animals){
 var hasil = [];
 var index = [];

 animals.sort();
 console.log(animals);
 
 for(var i = 0; i < animals.length; i++){
     var hurufAwal = animals [i][0];
    if(index.length == 0 || index.indexOf(hurufAwal) === -1){
       index.push(hurufAwal);
       hasil.push([animals[i]]); 
    } else {
      hasil[index.indexOf(hurufAwal)].push(animals[i]);  
    } 
 } return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
function groupAnimals(Animals) {
  //var Animals = ['cacing', 'ayam', 'kuda', 'anoa', 'kancil'];
   var abjad = [];
   var hasilbaru = [];

   for(var i = 0; i < Animals.length; i++){
       var check = false;
       for(var j = 0; j < abjad.length; j++){
          if(abjad[j]==Animals[i][0]){  //cek apakah huruf pertama dari Animals sudah masuk ke list abjad
              check = true;
          }
       }
       if (check == false){
         abjad.push(Animals[i][0]); //di push ke list abjad
       }
       
   }

   abjad.sort();

   for(var i = 0; i< abjad.length; i++){
      hasilbaru.push([]);  //bikin kelompok baru per huruf
      for(var j = 0; j<Animals.length; j++){
           if(abjad[i] === Animals[j][0]){ //bandingkan content dari list abjad dengan huruf pertama dari Animals
               hasilbaru[i].push(Animals[j]);
           }
      }

   }
 return hasilbaru;
 //return abjad;

} 




// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
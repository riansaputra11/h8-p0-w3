function targetTerdekat(arr) {
    var targetO = arr.indexOf('o');
    var jarakTerkecil = arr.length;
    if (arr.indexOf("x") === -1) {
        return 0
      } 
    for(var i = 0 ; i < arr.length; i++){
       var jarak = Math.abs(i- targetO);  
        if (arr[i] == 'x' && jarak < jarakTerkecil){
           jarakTerkecil = jarak;  
        }
    }return jarakTerkecil;   
}




//test case    
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
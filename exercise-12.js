function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var tampung =0;
  for(var x=0; x< arr.length; x++){
   if(arr[x+1] % arr[x] === 0 ){
     tampung++
   }
  }
  if(tampung === arr.length-1){
    return true;
  } else{
    return false;
  }  
}
  

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
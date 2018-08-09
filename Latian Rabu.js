function buying(name) {
  var users = [
    ['Adi', 20, 'male'],
    ['Budi', 19, 'male'],
    ['Cici', 20, 'female'],
    ['Dodo', 21, 'male']
  ];
  var product = [
    ['zarra clothes', 500000],
    ['Levi jeans', 1000000],
    ['Adidas Shoes', 1000000]
  ];
  var trans = [
    [0,0],
    [0,2],
    [1,1],
    [2,0],
    [3,2]
  ];

  var id_user;
  var id_product = []

    

 for(var i = 0 ; i < users.length; i++){
     if(users[i][0] == name){
         id_user = i;
     }
 }
// console.log(id_user)

 for(var j = 0 ; j < trans.length; j++){
    if(trans[j][0] == id_user){
       // console.log(trans[j],"ini adalah index transaksi");
        id_product.push(trans[j][1]);
    }
    //console.log(trans[i][j]);
    
}

//return id_product;

var result = [];

for(var k = 0; k < id_product.length; k++){
   console.log(id_product[k]);
   var tempIndex = id_product[k]
   result.push(product[tempIndex][0]);
}

return result;
}

// var result
// for(var k = 0 ; k < id_product.length; k++){
//      result.push(product[i][0]);
// }
//  return product
// }

console.log(buying('Adi')); // ['zarra clothes', 'Adidas Shoes']
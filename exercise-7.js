function hitungJumlahKata(kalimat) {
//   var bantu = 0;
//   for (var i = 0; i < kalimat.length; i++){
//       bantu += kalimat[i]
//   } return bantu;
var str = kalimat.split(' ')
//return str
return str.length 
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
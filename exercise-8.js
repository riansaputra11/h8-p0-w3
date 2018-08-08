function pasanganTerbesar(num) {
  // you can only write your code here!

var pasanganAngka = []; // untuk menampung pasangan angka yang dijadikan ke string
var keString = num.toString();

for (var i=0; i<keString.length; i++){
    var tampung = '';//var baru untuk menampung hasil yang undefined

    if (keString[i+1] === undefined) {
      break;
    }
    tampung = keString[i] + keString[i+1];//pengulangan pasangan ketika undefined
    pasanganAngka.push(tampung)//hasil akan dikembalikan ke pasanganAngka

  }
    pasanganAngka.sort(function(a,b){return b-a});
    var hasil = parseInt(pasanganAngka[0])

    return hasil

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
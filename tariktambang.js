/**
 *
 * dalam memperingati hari kemerdekaan diadakan lomba tarik tambang yang diikuti sejumlah warga  
 *
 * buatlah function yan akan menghitung apakah tim kanan atau tim kiri yang akan memenangkan perlombaan
 *
 * function ini akan menerima string yang terdiri dari sejumlah symbol sebagai berikut
 *  [1-9] ukuran daya tarik masing-masing peserta
 *  [-] menandakan tali
 *  [x] menandakan titik tengah tali
 *
 * contoh 1 :
 *  console.log( pemenangTarikTambang( '--1234--x--2234--' ))
 *  output:
 *   dimenangkan tim kanan
 *
 *  karena daya tarik tim kiri 1+2+3+4=10 dan tim kanan 2+2+3+4=11
 *
 * contoh 2 :
 *  console.log( pemenangTarikTambang( '---123---x---321---' ))
 *  output:
 *   hasil imbang
 *
 * note :
 *  tidak perlu format dataLomba
 */
 
// function pemenangTarikTambang(dataLomba){
//     var angka = '0123456789';
//     var hasilAngka = '';
//     var midHasilAngka = Math.round(hasilAngka/2)
//     var temp = '';
//     var kiri = temp.substring;
//     var kanan = temp.substring;
 
//     for (var i = 0; i < dataLomba.length; i++ ){
//         for ( var j = 0; j < angka.length; j++ ) {
//             if (dataLomba[i] === angka[j]){
//                 hasilAngka += dataLomba[i]
//             }
//             else {
//                 hasilAngka += ''
//             }
//             for ( var k = 0; k < hasilAngka; k++){
//                 if (hasilAngka[i] < midHasilAngka ){
//                     temp = temp + hasilAngka[i]
//                 } else if (hasilAngka[i] > midHasilAngka){
//                     temp = temp + hasilAngka[i]
//                 }
//                 }
//             } if ( kanan > kiri) {
//                 console.log('dimenangkan kanan')
//             } else if ( kanan < kiri) {
//                 console.log('dimenangkan tim kiri')
//             } else {
//                 console.log('hasil imbang')
//             }
//         }
//     return temp
// }
 
//  // Test Case
//  console.log(pemenangTarikTambang('--3234--x--2234--')); // dimenangkan tim kiri
//  console.log(pemenangTarikTambang('---87621--x--99857---')); // dimenangkan tim kanan
//  console.log(pemenangTarikTambang('-78896----x----56999-')); // hasil imbang



function pemenangTarikTambang(dataLomba)
{
    var mid = true;
    var Angka = ''
    var Kiri = 0;
    var Kanan = 0;
    

    for (var i = 0; i< dataLomba.length; i++){
        
        if ( (dataLomba[i] !== '-') && (dataLomba [i]!=='x')){
        //if(typeof(parseInt(dataLomba[i])) == "number"){
            if (mid == true){
            Kiri += parseInt(dataLomba[i]);
            }else {
                Kanan += parseInt(dataLomba[i])
            }
        } 
        else 
        {
            if(dataLomba[i] == 'x'){
             mid = false;
        }}
        
    }
if ( Kiri == Kanan) {
    console.log('imbang')}
    else if (Kiri < Kanan){
        console.log('menang kanan')
    }
    else 
          console.log('menang kiri')
}

console.log(pemenangTarikTambang('x89'));
    console.log(pemenangTarikTambang('--3234--x--2234--')); // dimenangkan tim kiri
    console.log(pemenangTarikTambang('---87621--x--99857---')); // dimenangkan tim kanan
    console.log(pemenangTarikTambang('-78896----x----56999-')); // hasil imbang
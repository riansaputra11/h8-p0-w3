function palindrome(kata) {
    var balikKata = '';
    for(var i = kata.length-1; i>= 0; i--)
    {
      balikKata = balikKata + kata[i];
    }
      if(balikKata === kata)
      {
          return true;
      }
      else
      {
         return false;
      }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
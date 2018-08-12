var string = 'hello-i-love-javascript'

function splitstring(str, character){
    var result = []
    var temp = ''

    for (var i =0; i < str.length; i++){
        if(str[i] !== character){
           console.log(str[i])
           temp = temp + str[i]; //jika tidak ketemu karakter maka hitung nilai temp
        }
           else{
           result.push(temp) //push nilai temp jika ketemu karakter
           temp = '' //reset temp
        }  
        if(i === str.length-1){ //cek jika index sudah paling ujung maka push nilainya ke dalam temp
            result.push(temp);
        }      
      }  
      
    temp = ''
    for(var i = 0; i < result.length; i++){
        temp += result[i]+ ' ';
    }
    //return temp;  //kalau mau return nilai dari gabungan dengan spasi
    //result.push(temp)
    return result;

}
console.log(splitstring('hello-i-love-javascript-','-')) ;


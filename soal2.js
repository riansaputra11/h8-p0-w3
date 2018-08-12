
    var string = 'XOXOXOXOXOXOXOXO';

    var result = [];

    var counter = 0;

    var size = Math.sqrt(string.length);

    for(var j = 0; j < size; j++){
        result.push([]);
        for (var k = 0; k < size; k++){
            result[j].push(string[counter]);
            counter++;
        }
    }
    //return result;

    console.log(result);

    var string = 'XOXOXOXOXOXOXOXO';

    var result = [];

    var counter = 0;

    var size = Math.sqrt(string.length);

    for(var j = 0; j < size; j++){
        //result.push([]);
        var dataAwal = [];
        for (var k = 0; k < size; k++){
            //result[j].push(string[counter]);
            dataAwal.push(string[counter]);
            result.push(dataAwal);
            counter++;
        }
    }
    //return result;

    console.log(result);

/*[
    [*]
    [*],[*]
    [*].[*],[*]
] 
*/


function bintangArray(input){
  var array = [];
  var size = input;
  for(var i = 0; i < input; i++){
      //array.push([]);
      var sub = [];
      for (var j = 0; j< size; j++){
         sub.push('*');
      }
      array.push(sub);
      size--;
  } 
  return array;
}
console.log(bintangArray(5));



function bintangArray2(input){
    var array = [];
    var size = 1;
    for(var i = 0; i < input; i++){
        //array.push([]);
        var sub = [];
        for (var j = 0; j< size; j++){
           sub.push('*');
        }
        array.push(sub);
        size++;
    } 
    return array;
  }
  console.log(bintangArray2(5));




  function drawbox(input){
   
    var counter = input*3;
    //var temp = '';
    for(var i = 0; i < input; i++){
       var temp = '';
        for(var j = 0; j < 3; j++){
        //var temp = ' ';
        temp += counter + ' ';
        counter--;
      } 
      console.log(temp);   
    } 
  }
  
  console.log(drawbox(3));
  

  
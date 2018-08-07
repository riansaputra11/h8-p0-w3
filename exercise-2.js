function balikString(kata) 
{
  var kataBaru = "";
  for (var i = kata.length-1; i >= 0; i--) 
  {
    kataBaru += kata[i]; 
  }
  console.log(kataBaru);   
}

balikString('hello World!')
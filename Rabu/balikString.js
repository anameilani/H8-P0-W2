function balikString(input){
  var output=''
  for(var i=input.length-1; i>=0; i--)
  {
    output= output + input[i];
  }
    console.log(output)
}

balikString("hello world!")
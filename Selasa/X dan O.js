function xo(str) {
  pattern=str.toLowerCase()
  var x=0
  var o=0
  for(var i=0; i<pattern.length; i++){
    if(pattern[i]=='x'){
        x=x+1
    }else if(pattern[i]=='o'){
        o=o+1
    }
  }
  if(x==o){
    return true
  }else{
    return false
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
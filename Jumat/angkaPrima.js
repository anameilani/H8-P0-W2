function angkaPrima(angka) {
    // you can only write your code here!
    var pembagi=0
  
    for(var i=1; i<=angka; i++){
        if(angka%i==0){
            pembagi++
        }
    }
  
  if(angka<=1){
      return false
  }
  else if(pembagi == 2){
      return true
    }else{
      return false
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
  
  
  
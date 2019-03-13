function pasanganTerbesar(num) {
    var angka = num.toString()
    var terbesar = 0
   
    for(var i=0; i<angka.length-1; i++){
      var angka1= Number(angka[i]+angka[i+1])
      var angka2= Number(angka[i+1]+angka[i+2])
   
      if(angka1>terbesar){
         terbesar= angka1
      }
      else if(angka2>terbesar) {
        terbesar= angka2
      }
      
      }
      return terbesar;
    }
   
   
   // TEST CASES
   console.log(pasanganTerbesar(641573)); // 73
   console.log(pasanganTerbesar(12783456)); // 83
   console.log(pasanganTerbesar(910233)); // 91
   console.log(pasanganTerbesar(71856421)); // 85
   console.log(pasanganTerbesar(79918293)); // 99
   
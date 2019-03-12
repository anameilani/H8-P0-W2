function konversiMenit(menit) {
    var min= Math.floor(menit/60);
    var det= menit%60;
    var str= det.toString()
    if(str.length == 1){
      return min+':0'+det
    }else{
      return min+':'+det
    }
      
    
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  
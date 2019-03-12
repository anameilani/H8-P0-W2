function angkaPalindrome(num) {
  var counter=num+1;

function isPalindrome(n){
    var angka = n.toString()
    var balik=''
    for(var i=angka.length-1; i>=0; i--){
        balik= balik+angka[i];
    }
    return angka === balik
}
  while (true) {
    if (isPalindrome(counter)) {
      return counter;
    } else {
      counter += 1;
    }

}
}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001 


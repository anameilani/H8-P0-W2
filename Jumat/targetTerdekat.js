function targetTerdekat(arr) {
  // you can only write your code here!
  var indexX=[]
  var indexO=[]

  for(var i=0; i<arr.length; i++){
    if(arr[i]== 'x'){
        indexX.push(i)
    }else if(arr[i] == 'o'){
        indexO.push(i)
    }
  }

  var amount =[]
  for(var i=0; i<indexO.length; i++){
    for(var j=0; j<indexX.length; j++){
          var substract = Math.abs(indexO[i] - indexX[j])
          amount.push(substract)
    }
  }

  var fixamount= amount.sort(function(a, b){return a-b})
  if(fixamount[0]== undefined){
    return 0
  }else{
    return fixamount[0]
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
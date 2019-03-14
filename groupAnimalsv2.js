function groupAnimals(animals) {
    // you can only write your code here!
    var group_animal =[]
      for(var i=0; i<animals.length-2; i++){
          var tmp =[]
          for(var j=0; j<animals.length; j++){
              if(animals[i][0] === animals[j][0]){
                  tmp.push(animals[j])
              }
          }
         group_animal.push(tmp)
      
      }
       
        
          for (var i = group_animal.length-1; i>=0; i--){
            for(var j = 1; j<=i; j++){
            if(group_animal[j-1][0][0]>group_animal[j][0][0]){
             var temp = group_animal[j-1];
             group_animal[j-1] = group_animal[j];
             group_animal[j] = temp;
          }
             
     }
    
  }
      
      return group_animal;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
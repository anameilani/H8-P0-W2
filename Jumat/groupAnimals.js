function groupAnimals(animals) {
    // you can only write your code here!

    var animalsSort= animals.sort()
    //console.log(animalsSort)
    var animalstemp= []
    var index=0;
    
  
    for(var i=0; i<animals.length; i++){
      
        if(animalstemp.length === 0){
  
          animalstemp.push([animalsSort[i]])
  
        }else if(animalstemp[index][0][0] === animalsSort[i][0]){
  
          animalstemp[index].push(animalsSort[i])
          
        }else{
          animalstemp.push([animalsSort[i]])

          index++
          
        }
        
      }
    
    return animalstemp
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
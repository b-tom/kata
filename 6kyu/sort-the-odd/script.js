function sortArray(array) {
    let oddNumbers = []
    let oddLocation = 0;
    let newArray = [...array]
    array.forEach(number => {
      if(number%2 != 0){
        oddNumbers.push(number)
      }
    })
    oddNumbers = oddNumbers.sort(function(a,b){return a-b})
    
    for (let i=0 ; i<array.length ; i++){
      if(newArray[i] %2 !=0){
        newArray[i]= oddNumbers[oddLocation];
        oddLocation ++;
      }
    }
    return newArray;
  }
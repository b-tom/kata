//my code
function duplicateCount(text){
    let array = [...text.toLowerCase()];
    let cleanArray = []
    array.forEach(ele =>{
      cleanArray.indexOf(ele)===-1?cleanArray.push(ele):'';
    })
    
    let count = 0;
    for (let i=0 ; i<cleanArray.length ; i++){
      let cnt = 0;
      for (let j=0 ; j<array.length ; j++){
        if(cleanArray[i]===array[j]){
          cnt +=1
        }
      }
      if(cnt>1){count+=1};
    }
    return count;
  }

//best solution 
// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
//   }

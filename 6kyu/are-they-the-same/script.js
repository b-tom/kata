function comp(array1, array2){
    if(array1 === null || array2 === null || array1.length != array2.length){
      return false;
    }else{
      let count =0;
      array1.sort(function(a, b){return a - b})
      array2.sort(function(a, b){return a - b})
      array1.forEach(ele =>ele*ele)
      for(let i=0; i<array1.length; i++){
        array1[i]*array1[i] === array2[i] ? count++ :'';
      }
  
      return count === array1.length? true : false;
    }  
  }
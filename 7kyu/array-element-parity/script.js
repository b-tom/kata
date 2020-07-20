function solve(arr){
    for(let i=0; i<arr.length ; i++){
      let value = false
      for(let j=0; j<arr.length ; j++){
        if(arr[i]===(arr[j]*(-1))){
          value = true
        }
      }
      if(value === false){
        return arr[i];
      }else{
        value = false;
      }
    }
  };
function solve(arr){
    filtered = [];
    for(let i=0; i<arr.length; i++){
      if( i === arr.lastIndexOf(arr[i])){
        filtered.push(arr[i]);
      }
    }
    return filtered;
  }
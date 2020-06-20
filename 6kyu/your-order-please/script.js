//my code 
function order(words){
    if(words.length===0){
      return ""
    }else{
      let array = words.split(" ");
      let orderedArray = [];
      while(orderedArray.length < array.length){
        for(let i=0; i<array.length; i++){
          for(let j=0 ; j<array[i].length ; j++){
            if(parseInt(array[i][j])===orderedArray.length+1){
              orderedArray.push(array[i])
            }else{continue}
          }
        }
      }
      let string=""
      orderedArray.forEach(ele => string+=" " + ele);
      return string.slice(1);
    }
}
//my solution
function isIsogram(str){
    if(str.length===0){
      return true
    } else{
      const cleanArr = []
      str = str.toLowerCase();
      for(let i=0 ; i<str.length;i++){
        if(cleanArr.includes(str[i])){
          return false;
        }
        else{
          cleanArr.push(str[i]);
        }
      }
      return true;
    }
}
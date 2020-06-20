//my code
function tribonacci(signature,n){
    if(signature.length===0||n==0){return []
    }else if(n<3){
        let shortArray=[]
        for(let i=0;i<n;i++){
          shortArray.push(signature[i]);
        }return shortArray ;
    }else{
      let  newArr = [...signature]
      for(let i=0 ; i<n-3 ;i++){
      newArr.push(newArr[i]+newArr[i+1]+newArr[i+2]);
      }return newArr ;
    }
}
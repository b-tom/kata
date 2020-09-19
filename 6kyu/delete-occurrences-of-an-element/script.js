function deleteNth(arr,n){
    const newArr = [];
  
    arr.forEach(ele =>{
      count = 0;
      newArr.forEach(newEle => {
        if(ele === newEle){
          count ++;
        }
      })
      if(count<n){
        newArr.push(ele)
      }
    })
    return newArr;
  }
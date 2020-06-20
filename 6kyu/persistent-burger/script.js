function persistence(num){
    if(num<=9){
      return 0;
    }else{
      let n = num;
      let count = 0
      while(n>9){
        let newN = [];
        for(let i=0 ; i<n.toString().length;i++){
          newN.push(parseInt(n.toString()[i]));
        }
        n = newN.reduce((accumulator, currentValue) => accumulator * currentValue);
        count +=1;
      }
      return count;
    }
  }
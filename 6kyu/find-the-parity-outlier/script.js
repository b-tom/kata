//my code
function findOutlier(integers){
    let odd = 0;
    let even = 0;
    for (let i=0 ; i<3 ; i++){
      integers[i]%2 ===0 ? even+=1 : odd +=1;
    }if(odd>1){
      // return integers.forEach(element => element % 2===0 ?element);
      for (let i=0 ; i<integers.length ; i++){
        if(integers[i]%2 === 0){
          return integers[i];
        }
      }
    }else{
      // return integers.forEach(element => element % 2 !=0 ? element);}
      for (let i=0 ; i<integers.length ; i++){
        if(integers[i]%2 != 0){
          return integers[i];
        }
      }
    }
}
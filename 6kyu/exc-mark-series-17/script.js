function balance(left,right){
    theLeft = 0;
    theRight = 0;
    
    for(let i=0; i<left.length ; i++)
    {
      if(left[i] === '!'){
        theLeft += 2
      }else if( left[i] === '?'){
        theLeft +=3
      }
    }
    for(let i=0; i<right.length ; i++)
    {
      if(right[i] === '!'){
        theRight += 2
      }else if( right[i] === '?'){
        theRight +=3
      }
    }
    return theLeft>theRight? 'Left' : theLeft===theRight? 'Balance' : 'Right';
  
  }
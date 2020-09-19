function scramble(str, arr) {
    let arrayString = str.split('');
    let arrLocation = 0;
    let newString ='';
    for(let i=0 ; i< str.length ; i++){
      location = arr[arrLocation]
      arrayString[location] = str[i]
      arrLocation++ 
    }
    arrayString.forEach(ele => newString+= ele)
    return newString
  };
  
  scramble('abcd', [0,3,1,2])
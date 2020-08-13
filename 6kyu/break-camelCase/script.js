function solution(string) {
    cleanString = '';
    for(let i=0; i<string.length; i++){
      if(string[i]!=string[i].toUpperCase()){
        cleanString += string[i];
      }else{
        cleanString+= ' ';
        cleanString+= string[i];
      }
    }
    return cleanString;
  }
  
  solution(aa)
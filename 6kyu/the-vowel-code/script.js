function encode(string) {
    let newString = '';
    for(let i=0 ; i<string.length ; i++){
      switch(string[i]) {
        case 'a':
          newString += '1';
          break;
        case 'e':
          newString += '2';
          break;
        case 'i':
        newString += '3';
          break;
        case 'o':
          newString += '4';
          break;
        case 'u':
          newString +='5';
          break;
        default:
          newString += string[i]
      }
    }
    return newString
  }
  
  function decode(string) {
      let newString = '';
    for(let i=0 ; i<string.length ; i++){
      switch(string[i]) {
        case '1':
          newString += 'a';
          break;
        case '2':
          newString += 'e';
          break;
        case '3':
        newString += 'i';
          break;
        case '4':
          newString += 'o';
          break;
        case '5':
          newString +='u';
          break;
        default:
          newString += string[i]
      }
    }
    return newString
  }
  
//my solution
function findShort(s){
    let array = s.split(" ")
    let shortestWord = "";
    let shortestWordLenght = 1000; 
    for (let i=0 ; i<array.length ; i++){
      if(array[i].length < shortestWordLenght){
        shortestWord = array[i];
        shortestWordLenght = array[i].length;
      } else{continue};
    }
    // array.forEach(element =>element.length< shortestWordLenght? shortestWord=element && shortestWordLenght = element.length:"" );
    return shortestWordLenght
}
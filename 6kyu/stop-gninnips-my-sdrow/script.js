//my code

function spinWords(string){
    let wordsArray = string.split(" ");
    const finalArray = [];
    for (let i=0 ; i<wordsArray.length ; i++){
      if (wordsArray[i].length>4){
        let spin="";
        for(let j= wordsArray[i].length-1; j>=0;j--){
          spin += wordsArray[i][j];
        }finalArray.push(spin);
      }else {finalArray.push(wordsArray[i])};
    }console.log(finalArray);
    let finalString = "";
    console.log(finalArray.length);
    for(let o=0 ; o<finalArray.length; o++){
      if(o+1 === finalArray.length){
        finalString += finalArray[o];
      }else{
        finalString += finalArray[o] + " ";
      }
    }return finalString
}
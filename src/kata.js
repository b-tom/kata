//Kata 1
//Write a function that takes in a string of one or more words, and returns the same string, 
//but with all five or more letter words reversed (Just like the name of this Kata). 
//Strings passed in will consist of only letters and spaces. 
//Spaces will be included only when more than one word is present.

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
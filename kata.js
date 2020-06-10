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
    }let finalString = "";
    for(let o=0 ; o<finalArray.length; o++){
      if(o+1 === finalArray.length){
        finalString += finalArray[o];
      }else{
        finalString += finalArray[o] + " ";
      }
    }return finalString
}
  
spinWords("Hey fellow warriors");

//Square Every Digit

function squareDigits(num){
  let string = String(num)
  let final = "";
  for(let i=0 ; i<string.length ; i++){
    result = Number(string[i]) * Number(string[i]);
    final += String(result);
  } return Number(final);
}

number = 9119;

squareDigits(number);

// Find The Outlier

// function findOutlier(integers){
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
//Refactor
function findOutlier(integers){
  let even = integers.filter(a=>a%2==0);
  let odd = integers.filter(a=>a%2!=0);
  return even.length ==1? even[0]:odd[0];
}

let array1 = [2, 4, 0, 100, 4, 11, 2602, 36]; //Should return: 11 (the only odd number)
let array2 = [160, 3, 1719, 19, 11, 13, -21] //Should return: 160 (the only even number)
findOutlier(array2);

//Tribonacci
function tribonacci(signature,n){
  if(signature.length===0||n==0){return []
  }else if(n<3){
      let shortArray=[]
      for(let i=0;i<n;i++){
        shortArray.push(signature[i]);
      }return shortArray ;
  }else{
    let  newArr = [...signature]
    for(let i=0 ; i<n-3 ;i++){
    newArr.push(newArr[i]+newArr[i+1]+newArr[i+2]);
    }return newArr ;
  }
}

array = [1,1,1];
tribonacci(array,7)

//Return Shortest words
function findShort(s){
  let array = s.split(" ")
  let shortestWordLength = 1000; 
  // for (let i=0 ; i<array.length ; i++){
  //   if(array[i].length < shortestWordLength){
  //     shortestWordLength = array[i].length;
  //   } else{continue};
  // }
  array.forEach(element =>element.length< shortestWordLength? shortestWordLength=element.length :"" );
  return shortestWordLength
}

findShort('hello how are you');


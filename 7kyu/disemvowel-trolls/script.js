//my solution
function disemvowel(str) {
    let string ="";
    for(let i=0 ; i<str.length ; i++){
      if(str[i].toLowerCase()=== "a"||str[i].toLowerCase()=== "e"||str[i].toLowerCase()=== "i"||str[i].toLowerCase()=== "o"||str[i].toLowerCase()=== "u"){
        continue;
      } else{
        string+=str[i]
      }
    }
    return string;
}
//my solution
function squareDigits(num){
    let string = String(num)
    let final = "";
    for(let i=0 ; i<string.length ; i++){
      result = Number(string[i]) * Number(string[i]);
      final += String(result);
    } return Number(final);
}
//my solution

function highAndLow(numbers){
    let array = numbers.split(' ');
    let array2 = array.map(ele => parseInt(ele));
    let high = -999999999999999999;
    let low = 999999999999999999;
    for (let i=0 ; i<array2.length ; i++){
      if(array2[i]<low && array2[i]>high){
        high = array2[i];
        low = array2[i];
      }else if(array2[i]>high){
        high = array2[i];
      }else if(array2[i]<low){
        low = array2[i];
      }else{continue};
    }
    return `${high} ${low}`
}
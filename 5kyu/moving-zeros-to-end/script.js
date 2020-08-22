var moveZeros = function (arr) {
    const newArr = [];
    let zeroCount = 0
    arr.forEach(ele => {
      if(ele === 0){
        zeroCount ++;
      }else{
        newArr.push(ele)
      }
    })
    for (let i=0 ; i<zeroCount ; i++){
      newArr.push(0)
    }
    return newArr
}
  
let the = [1,2,0,1,0,1,0,3,0,1]
  
moveZeros(the)
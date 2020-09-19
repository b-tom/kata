function getMiddle(s)
{
  let length = s.length / 2
  if(s.length % 2 === 0){
    // console.log(length)
    let string = s.slice(length - 1, length + 1)
    return string
  }else{
    return s[Math.ceil(length)-1]
  }
}

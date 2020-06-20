//my solution
function SeriesSum(n){
    let series = [];
    let fraction = -6;
    for(let i=0 ;i<n ; i++){
      fraction += 3
      if(i===0){
        series.push(1)
      } else if(i===1){
        series.push(1/4)
      }else{
        series.push(1/(4+fraction));
      }
    };
    if(series.length === 0){return '0.00'
    }else{
      const reducer = (accum, currentVal) => accum + currentVal;
      return series.reduce(reducer).toFixed(2);
    }
}
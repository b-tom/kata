//My Solution
function nbYear(p0, percent, aug, p) {
    let habitants = p0;
    let numberOfYears = 0;
    let percentage = percent/100
    while(habitants < p){
      habitants = habitants + (habitants*percentage) + aug;
      numberOfYears += 1
    };
    return numberOfYears;
}
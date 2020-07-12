// my code
function printerError(s) {
    let errors = 0
    for(let i=0 ; i<s.length; i++){
      s[i]==='n' || s[i]==='o' || s[i]==='p'||s[i]==='q'|| s[i]==='r' || s[i]==='s' || s[i]==='t' || s[i]==='u' || s[i]==='v' || s[i]==='w' || s[i]==='x' || s[i]==='y' || s[i]==='z'? errors++: "";
    }
    let result = `${errors}/${s.length}`
    return result;
}
  
string = "aaakmdlsnvsasxfasfderv"
printerError(string);

//best practices
// function printerError(s) {
//     return s.match(/[^a-m]/g).length + "/" + s.length;
// }
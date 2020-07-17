function kebabize(str) {
    kebab = ''
    if(Number(str[0])>=0||str[0]==="-"){
      '';
    }else{
      kebab += str[0].toLowerCase()
    }
   for(let i=1 ; i<str.length ;i++){
     if(Number(str[i]) >= 0 || str[i]==="-"){
      continue; 
     }else if(str[i]===str[i].toUpperCase()){
       kebab += '-'
       kebab += str[i].toLowerCase();
     }else{
       kebab += str[i];
     }
   }
   if(kebab[0]==="-"){
     return kebab.slice(1,kebab.length)
   }else{
   return kebab;
   }
  }
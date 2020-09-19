function isSameLanguage(list) {
    let language = [];
    list.forEach(ele => {
      if(language.indexOf(ele.language)=== -1){
        language.push(ele.language);
      }
    })
    return language.length ===1? true:false;
  }
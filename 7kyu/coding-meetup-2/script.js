function greetDevelopers(list) {

    list.forEach((element) => {
      element.greeting = `Hi ${element.firstName}, what do you like the most about ${element.language}?`;
    });
  
    return list;
  }
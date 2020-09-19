function recycle(array) {
    const paper = array.filter(ele => ele.material === 'paper' || ele.secondMaterial === 'paper').map(ele => ele.type);
    const glass = array.filter(ele => ele.material === 'glass' || ele.secondMaterial === 'glass').map(ele => ele.type);
    const organic = array.filter(ele => ele.material === 'organic' || ele.secondMaterial === 'organic').map(ele => ele.type);
    const plastic = array.filter(ele => ele.material === 'plastic' || ele.secondMaterial === 'plastic').map(ele => ele.type);
  
  
    return [paper, glass, organic, plastic];
  }
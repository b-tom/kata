function towerBuilder(nFloors) {
    let tower = [];
    let block = '*' 
    for (let i=0 ; i<nFloors-1 ; i++){
      block += '**'
    }  
  
    for (let i=0 ; i<nFloors ; i++){
      tower.unshift(block);
      block = block.replace('**','');
      block = ' ' + block + ' ';
    }
    return tower
  }
  
  towerBuilder(5);
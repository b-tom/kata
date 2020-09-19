function getFirstPython(list) {
    python = list.filter(ele => ele.language === 'Python');
    return python.length === 0? 'There will be no Python developers': `${python[0].firstName}, ${python[0].country}`
  }
function countDevelopers(list) {
    filtered = list.filter(coder => coder.continent == "Europe" && coder.language == "JavaScript" )
    return filtered.length
  }
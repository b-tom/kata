function findAdmin(list, lang) {
    filtered = list.filter(coder => coder.language == lang &&coder.githubAdmin === 'yes');
    return filtered
  }
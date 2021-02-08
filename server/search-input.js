function searchInput(search) {
  const searchTrimmed = search.trimEnd();
  let newSearch = '';
  for (let i = 0; i < searchTrimmed.length; i++) {
    i === 0 ? newSearch += searchTrimmed[i].toUpperCase() : newSearch += searchTrimmed[i].toLowerCase();
  }
  newSearch += '%';
  return newSearch;
}

module.exports = searchInput;

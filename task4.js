function capitalize(string) {
    const firstLetter = string.charAt(0).toUpperCase() + string.slice(1);
    return firstLetter;
  }
  
  module.exports = capitalize;
  
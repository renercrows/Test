function checkLength (string) {
  const words = string.length;
  if (words > 0 && words < 10) {
    return words;
  }
}

module.exports = checkLength;

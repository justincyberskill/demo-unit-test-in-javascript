function sumTwo(a, b) {
  if (!a || !b) {
    return a ? a : b;
  }
  return a + b;
}

module.exports = {
  sumTwo  
};

function digitalRoot(n) {
  let sum = String(n).split("").map(Number).reduce((a, b) => a + b, 0);
  if (sum < 10) {
    return sum;
  }
  return digitalRoot(sum);
}

function digPow(n, p){
  let digits = String(n).split('').map(Number);
  let total = 0;

  for (let i = 0; i < digits.length; i++) {
    total = total + digits[i] ** (p + i);
  }

  return total % n === 0 ? total / n : -1;
}

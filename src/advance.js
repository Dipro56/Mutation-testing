function Pow(a, b) {
  return a ** b;
}

function Modulo(a, b) {
  return a % b;
}

function GCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// console.log(Pow(2, 3));
// console.log(Modulo(4, 7));
console.log(GCD(12, 13));

module.exports = {
  Pow,
  Modulo,
  GCD,
};

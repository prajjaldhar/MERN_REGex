function calculator(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

var res1 = calculator(3, 5, add);
console.log(`res is ${res1}`);
var res2 = calculator(5, 3, sub);
console.log(`res is ${res2}`);

function sum(a, b) {
  if (a == null || b == null) {
    return 0;
  }
  return a + b;
}

function main() {
  const result = sum(2, 3);
  console.log("Result:", result);
}

main();

module.exports = { sum };

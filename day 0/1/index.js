function countMultiples(a, b, c) {
  if (a % c === 0 || b % c === 0) {
    return 'infinite';
  }
  
  const numMultiples = Math.floor(b / c) - Math.ceil(a / c) + 1; 
  return numMultiples;
}

const a = 1;
const b = 20;
const c = 3;
const result = countMultiples(a, b, c);
console.log(`Number of multiples of ${c} between ${a} and ${b}: ${result}`);
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateFactorial(n: number): number {
  if (n < 0) return -1; // Factorial is not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  return n * calculateFactorial(n - 1);
}

rl.question('Enter a positive integer: ', (input) => {
  const number = parseInt(input);
  if (isNaN(number) || number < 0) {
    console.log('Please enter a valid positive integer.');
  } else {
    const result = calculateFactorial(number);
    console.log(`The factorial of ${number} is ${result}.`);
  }
  rl.close();
});
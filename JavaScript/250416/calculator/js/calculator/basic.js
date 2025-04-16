// 더하기, 빼기, 곱하기, 나누기

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b === 0) {
    throw new Error('');
  } else {
    return a / b;
  }
}

export {add, subtract, multiply, divide};
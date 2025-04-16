// 제곱, n제곱근

function power(a, b) {
  return a ** b;
}

function squareRoot(a, b) {
  if(a < 0) {
    throw new Error('음수의 제곱근은 계산할 수 없습니다.');
  }

 return a ** (1 / b);
}
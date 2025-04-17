// 제곱, n제곱근

export function power(a, b) {
  return a ** b;
}

export function squareRoot(a, b) {
  if(a < 0) {
    throw new Error('음수의 제곱근은 계산할 수 없습니다.');
  }

 return a ** (1 / b);
}
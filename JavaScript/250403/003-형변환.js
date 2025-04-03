console.log('===== 형 변환 =====');
console.log('23' + 20);

// +) 타입을 확인하는 방법 typeof

console.log('1. 문자열 변환');
console.log(String(10), typeof String(10));
console.log(String(NaN), typeof String(NaN) );
console.log(String(Infinity), typeof String(Infinity) );

console.log(String(true), typeof String(true));
console.log(String(false), typeof String(false));

console.log(String(null), typeof String(null));
console.log(String(undefined), typeof String(undefined));

console.log(String({name: '라이캣'}));
console.log(String([1, 2, 3, 4, 5]));

console.log('----- toString -----');
console.log((10).toString(), typeof (10).toString());
console.log((10).toString(2), typeof (10).toString(2)); // 숫자

console.log(true.toString());
console.log(false.toString());

// null과 undefined는 toString으로 변환이 불가하다!
// console.log(null.toString());
// console.log(undefined.toString());

console.log({name:'라이캣'}.toString());
console.log([1, 2, ,3 ,4, 5].toString());

// 3. 연산자를 이용한 형 변환
console.log('' + 10, typeof ('' + 10));
console.log('' + true);
console.log('' + null);
console.log('' + undefined);
console.log('' + {name:'라이캣'});
console.log('' + [1, 2, ,3 ,4, 5]);

console.log('===== 숫자형 변환 =====');
console.log('----- Number -----');
console.log(Number('10'), typeof Number('10'));
console.log(Number('10.5'));
console.log(Number(0x1F)); // 2진수 0b, 8진수 0o, 16진수 0x

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(Number({name: '라이캣'})); // NaN [Object Object]
console.log(Number([5])); // 5
console.log(Number([1, 2, 3])); // NaN

console.log('----- parseInt, parseFloat -----')
console.log(parseInt('10'));
console.log(parseInt('10.5'));

console.log(parseFloat('20'));
console.log(parseFloat('20.5'));

console.log(parseInt('11', 2)); // 11을 2진수 표기로 인식 -> 10진수 수로 변환
console.log(parseInt('11', 8)); // 11을 8진수 표기로 인식 -> 9
console.log(parseInt('11', 16)); // 11을 8진수 표기로 인식 -> 17

console.log('----- 연산자를 이용해서 숫자형 변환 -----');
console.log('단항 산술 연산자 +');
console.log(+'10');
console.log(+'0xFF');

console.log(+true);
console.log(+false);

console.log('----- 산술 연산(+ 연산은 제외) -----');
console.log('10' * 1);
console.log('12.5' / 1);

console.log('===== 논리형으로 변환 =====');
// truthy(true로 평가되는 값): 0을 제외한 숫자, 빈 문자열을 제외한 문자열, 객체({}), 배열([])
// falsy(false로 평가되는 값): 0, '', null, undefined, NaN
console.log(Boolean('')); // false
console.log(Boolean('hello')); // true

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-2)); // true
console.log(Boolean(NaN)); // false

console.log(Boolean(null)); // fasle
console.log(Boolean(undefined)); // fasle

console.log(Boolean({name: 'weniv'})); // true
console.log(Boolean({})); // true
console.log(Boolean([1, 2, 3])); // true
console.log(Boolean([])); // true

console.log('----- 논리연산자를 이용해서 논리형 변환 -----');
// 논리부정(!) 결과 boolean -> 논리 부정을 2번
console.log(!!0);
console.log(!!1);

console.log(!!null);
console.log(!!undefined);
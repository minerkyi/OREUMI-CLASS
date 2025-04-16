// 정규식의 기본 구조
// /pattern/flag;

const reg1 = /abc/g;
console.log(reg1.test('abc abc abc'));

const reg2 = new RegExp('abc', 'g');
console.log('abc Abc ABC abc'.match(reg2));

console.log('===== 플래그 =====');
let text = `Hello world!
Hello World!
  hello WORLD!
hello world!
`;

console.log('----- g 플래그 -----');
console.log(text.match(/Hello/));
console.log(text.match(/Hello/g)); // 전역 검색

console.log('----- i 플래그 -----');
console.log(text.match(/hello/g));
console.log(text.match(/hello/gi)); // 대소문자 구분 없이

console.log('----- m 플래그 -----');
console.log(text.match(/^hello/gi));
console.log(text.match(/^hello/gim)); // 여러 줄
// 플래그는 혼합해서 사용이 가능

console.log('===== 메서드 =====');
console.log('1. test');
let pattern1 = /abc/g;
console.log(pattern1.test('ABC')); // false
console.log(pattern1.test('abc abc')); // true

console.log('2. exec');
pattern1 = /hello/g;
console.log(pattern1.exec('hello world'));
console.log(pattern1.exec('hello world hello weniv'));
console.log(pattern1.exec('abcdefg')); // 일치하지 않으면 null

console.log('3. match');
const text2 = 'abc ABC Abc';
console.log(text2.match(/abc/g));
console.log(text2.match(/hello/gi)); // 일치하는 값이 없으면 null

console.log('4. search');
// const text2 = 'abc ABC Abc';
console.log(text2.search(/ABC/));
console.log(text2.search(/xyz/)); // 일치하지 않는 경우 -1

console.log('5. replace');
console.log('Hello World Hello Weniv'.replace(/H/g, '👏'));

{
  console.log('===== 패턴 =====');
  let text = "abc ABC 가나다 1234 !@#";
  console.log('소문자:', text.match(/[a-z]/g));
  console.log('대문자:', text.match(/[A-Z]/g));
  console.log('한글:', text.match(/[가-힣]/g));
  console.log('숫자:', text.match(/[0-9]/g));
  console.log('특수문자:', text.match(/[!@#]/g));

  console.log('\n===== 이스케이프 패턴 =====');
  text = `abc ABC 가나다
    1234 !@#_`;
  console.log('모든 문자(.):', text.match(/./g));

  console.log('숫자(d):', text.match(/\d/g));
  console.log('숫자가 아닌 모든 문자(D):', text.match(/\D/g));

  console.log('단어문자(w):', text.match(/\w/g)); // 영문, 숫자, _
  console.log('단어문자가 아닌 문자(W):', text.match(/\W/g));

  console.log('공백문자(s)', text.match(/\s/g));
  console.log('공백문자가 아닌 문자(S)', text.match(/\S/g));

  console.log('단어경계(b)', text.match(/\b\w/g));
  console.log('단어경계에 있지 않는 값(B)', text.match(/\B\w/g));

  console.log('\n===== 위치 문자 =====');
  let exampleText = 'Example \nexample';
  // 문자열의 시작 ^
  console.log(exampleText.match(/^E/g));
  console.log(exampleText.match(/^e/gm));
  // 문자열의 끝 $
  console.log(exampleText.match(/e$/));
  console.log(exampleText.match(/b$/));
  // 문자 집합 []
  console.log(exampleText.match(/[ex]/gi));
  console.log(exampleText.match(/[^ex]/gi));
  console.log(exampleText.match(/[e-x]/gi));
  console.log(exampleText.match(/[^e-x]/gi));

  console.log('\n===== 수량 =====');
  text = 'abc aabbcc aaabbbccc aaaabbbbcccc';
  // ?: 앞의 문자열이 0개이거나 1개인 경우
  console.log(text.match(/a?b/g));
  // +: 앞의 문자열이 1개 이상
  console.log(text.match(/a+b/g));
  // *: 앞의 문자열이 0개 이상
  console.log(text.match(/a*b/g));

  // 중괄호로 개수 범위 지정
  console.log(text.match(/a{1}/g));
  console.log(text.match(/a{2}/g));
  console.log(text.match(/a{3}/g));
  console.log(text.match(/a{2,}/g));
  console.log(text.match(/a{2,3}/g));

  // or 연산(|)
  console.log(text.match(/a{2}|b{2}/g));

  let days = 'monday, tuesday, wednesday, thursday, friday, saturday, sunday';
  console.log(days.match(/on|ues|rida/g));
}

{
  console.log('\n===== 정규표현식 =====');
  console.log('1. 문자열 추출');
  let post = '#개발 강의는 역시 #위니브 와 함께 학습하세요 #개발자 #프론트_엔드';
  let hashtagPtr = /#[가-힣\w]+/g;
  console.log(post.match(hashtagPtr).map((el) => el.slice(1)));

  let spaceText = '     Hello   World     Hello   Weniv    ';
  // 공백이 1개 이상 -> (1) 공백 (2) 1개 이상
  let spacePattern = /\s+/g;
  console.log(spaceText.match(spacePattern));
  console.log(spaceText.replace(spacePattern, ' ').trim());

  console.log('3. 패턴 검증');
  // 전화번호 010-0000-0000 또는 02-000-0000
  // 맨 앞자리 2-3개의 숫자, 3-4개의 숫자, 4숫자
  // 숫자 \d, 범위: {}
  const numberPattern = /^\d{2,3}-\d{3,4}-\d{4}$/;
  console.log(numberPattern.test('010-1111-2222'));
  console.log(numberPattern.test('02-111-2222'));
  console.log(numberPattern.test('02-11111-2222'));
  console.log(numberPattern.test('0002-1111-2222'));
  // const phonePattern = /^[\d]{2,3}-[\d]{3,4}-[\d]{4}$/;
  // let phoneNum = '02-123-1234';
  // console.log(phoneNum.match(phonePattern));

  // 이메일 id@domain.kr
  // 아이디: 영어 대소문자, 숫자, 점, _값이 1개 이상
  // @: 필수
  // 도메인: 영어 대소문자, 숫자, 점, _값이 1개 이상
  // 최상위 도메인: 영어 소문자 2개 ~ 3개 (com, kr)
  const emailPattern = /^[a-zA-Z0-9\._]+@[\w\.]+\.[a-z]{2,3}$/;
  console.log(emailPattern.test('test@weniv.com'));
  console.log(emailPattern.test('hati.dev@weniv.co.kr'));
  console.log(emailPattern.test('hati#dev@weniv.com'));
  console.log(emailPattern.test('email@domain.com'));
  // const emailPattern = /^[\w.]+@[\w.]+[.][a-z]{2,3}$/;
  // let emailText = 'id_132.aaa@domain.co.com';
  // console.log(emailText.match(emailPattern));

  console.log('----- 비밀번호 검증 -----');
  // 영어 소문자, 숫자를 한 개 이상씩 포함
  // 비밀번호는 8자 이상, 영어 소문자, 대문자, 숫자, !@#$%
  // 이때 영어 대문자와 소문자는 1개 이상 존재
  // (?=pattern) 조건 확인
  const pwPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%])[A-Za-z0-9!@#$%]{8,}$/;
  console.log(pwPattern.test('abcd123!@#'));
  console.log(pwPattern.test('ABCabcABC'));
  console.log(pwPattern.test('Aa1!aaaa'));
  
  function pwCheck(pw) {
    // pw가 들어왔을 때 검증 -> 각각의 오류메시지를 반환
  
    // 1. 길이가 8 이상인지 검증
    // 비밀번호는 최소 8자 이상이어야 합니다.
    if(!/^[a-zA-Z0-9!@#$%]{8,}$/.test(pw)) {
      return '비밀번호는 최소 8자 이상이어야 합니다.';
    }
    // let pattern = /[A-Za-z0-9!@#$%]{8,}/;
    // if(!pattern.test(pw)) {
    //   alert('비밀번호는 최소 8자 이상이어야 합니다.');
    //   return false;
    // }
  
    // 2. 대문자가 포함
    // 비밀번호에 대문자가 포함되어야 합니다.
    if(!/[A-Z]/.test(pw)) {
      return "비밀번호에 대문자가 포함되어야 합니다.";
    }
    // pattern = /[A-Z]+/;
    // if(!pattern.test(pw)) {
    //   alert('비밀번호에 대문자가 포함되어야 합니다.');
    //   return false;
    // }
  
    // 3. 소문자가 포함
    // 비밀번호에 소문자가 포함되어야 합니다.
    if(!/[a-z]/.test(pw)) {
      return "비밀번호에 소문자가 포함되어야 합니다.";
    }
    // pattern = /[a-z]+/;
    // if(!pattern.test(pw)) {
    //   alert('비밀번호에 소문자가 포함되어야 합니다.');
    //   return false;
    // }
  
    // 4. 숫자가 포함
    // 비밀번호에 숫자가 포함되어야 합니다.
    if(!/[0-9]/.test(pw)) {
      return "비밀번호에 숫자가 포함되어야 합니다.";
    }
    // pattern = /[0-9]+/;
    // if(!pattern.test(pw)) {
    //   alert('비밀번호에 숫자가 포함되어야 합니다.');
    //   return false;
    // }
  
    // 5. 특수문자 포함
    // 비밀번호에 특수문자가 포함되어야 합니다.
    if(!/[!@#$%]/.test(pw)) {
      return "비밀번호에 특수문자가 포함되어야 합니다.";
    }
    // pattern = /[!@#$%]+/;
    // if(!pattern.test(pw)) {
    //   alert('비밀번호에 특수문자가 포함되어야 합니다.');
    //   return false;
    // }
    
    // 모든 검증이 통과되었을 때만 true를 반환
    return true;
  }
  console.log(pwCheck('Abc1!'));
  console.log(pwCheck('abcabc1!'));
  console.log(pwCheck('ABCABCABC!'));
  console.log(pwCheck('ABCABCABc!'));
  console.log(pwCheck('ABCABCABc1'));
  console.log(pwCheck('ABCABCABc1!'));
}

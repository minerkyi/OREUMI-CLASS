console.log('===== 문자열 메서드 =====');
{
    let str = 'Hello world';
    console.log('----- indexOf -----');
    console.log(str.indexOf('o')); // 4
    console.log(str.indexOf('weniv')); // -1

    str = 'Hello world Hello weniv';
    console.log(str.indexOf('Hello')); // 0
    console.log(str.indexOf('Hello', 5)); // 12

    console.log('----- lastIndexOf -----');
    str = 'Hello world';
    console.log(str.lastIndexOf('o')); // 16
    console.log(str.lastIndexOf('weniv')); // -1

    str = 'Hello world Hello weniv';
    console.log(str.lastIndexOf('Hello')); // 12
    console.log(str.lastIndexOf('Hello', 10)); // 0

    console.log('----- includes -----');
    str = 'Hello world';
    console.log(str.includes('weniv')); // fasle
    console.log(str.includes('Hello')); // true

    console.log('----- charAt ----- ');
    str = 'Hello world';
    console.log(str.charAt(5)); // ' '
    console.log(str.charAt(10)); // 'd'
    console.log(str.charAt(12)); // '', 범위를 벗어나는 인덱스

    console.log('----- substring ----- '); // 범위를 설정
    str = 'Hello world Hello weniv';
    console.log(str.substring(0, 5)); // Hello
    console.log(str.substring(0, 11)); // Hello world
    console.log(str.substring(16)); // 종료 인덱스 생략 -> 마지막까지 추출

    console.log('----- slice -----');
    str = 'Hello world Hello weniv';
    console.log(str.slice(0, 5));
    console.log(str.slice(-5)); // 음수 인덱스
    console.log(str.substring(-5)); // 음수 인덱스 -> 0으로 처리 str.substring(0)

    console.log(str.substring(3, 2)); // str.substring(2, 3)
    console.log(str.slice(3, 2)); // ''

    console.log('----- substr -----');
    // 시작 인덱스, 길이
    str = 'Hello world';
    console.log(str.substr(0, 4)); // Hell
    console.log(str.substr(6)); // 끝까지 출력
    console.log(str.substr(-3)); // 음수 인덱스

    console.log('----- toUpperCase, toLowerCase -----');
    str = 'Hello world';
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    // 검색 javascript, JavaScript JAVASCRIPT -> 일치하는 javascript

    // 지금까지 배우고 있는 모든 메서드는 str 자체를 변경X
    // -> 불변성(새로운 문자열을 반환, 원본 변경X)

    console.log('----- trim, trimStart, trimEnd -----');
    // 공백을 제거(앞뒤공백)
    str = '     Hello   world       ';
    console.log('-' + str + '-');
    console.log('-' + str.trim() + '-');
    console.log('-' + str.trimStart() + '-');
    console.log('-' + str.trimEnd() + '-');

    console.log('----- padStart, padEnd -----');
    str = '4';
    console.log(str.padStart(5, '0'));
    str = 'hello world';
    console.log(str.padStart(5, '0'));

    str = '5';
    console.log(str.padEnd(5, '-'));

    let month = '4';
    let date = '24';
    console.log(`${month.padStart(2, '0')}월 ${date.padStart(2, '0')}일`);

    console.log('----- replace -----');
    str = 'Hello world';
    console.log(str.replace('world', 'weniv')); // 가장 처음 일치하는 한 개만 변경
    console.log(str.replaceAll('o', 'a')); // 일치하는 모든 값을 변경

    console.log('----- split -----');
    let number = '010-1234-5678';
    console.log(number.split('-'));
    let fruits = 'apple, banana, mango, peach';
    console.log(fruits.split(', '));
    console.log(fruits.split(', ', 2));

    console.log('----- repeat -----');
    console.log('*'.repeat(3));
    console.log('Hello'.repeat(2));
}
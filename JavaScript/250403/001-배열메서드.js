{
    console.log('===== 배열의 메서드 =====')
    console.log('1. 정렬');
    const fruits = ['사과', '바나나', '딸기', '포도', '망고', '수박'];
    fruits.sort();
    console.log(fruits); // 사전식
    
    const numbers = [100, 2, 23, 1000, 42];
    console.log(numbers.sort()); // 숫자로 이뤄진 배열도 사전식으로 정렬
    
    // 오름차순 또는 내림차순
    // 비교함수
    // a, b를 비교 -> 0보다 작으면(음수) a가 앞 : a b
    //             -> 0보다 크면(양수) b가 앞 : b a
    //             -> 0이 나오면 : 두 자리를 바꾸지 않습니다
    
    numbers.sort(function(a, b) {
        if(a < b) {
            // a, b
            return -1;
        } else if(a > b) {
            // b, a
            return 1;
        } else {
            return 0;
        }
    });
    console.log(numbers);
    
    numbers.sort((a, b) => a - b);
    console.log('오름차순:', numbers);
    
    numbers.sort((a, b) => b - a);
    console.log('내림차순:', numbers);
    
    numbers.reverse();
    console.log('역순:', numbers);
}

{
    console.log('===== 2. 순회 =====');
    console.log('----- 1. forEach -----')
    const arr = ['a', 'b', 'c'];
    arr.forEach(function(elem, index, arr) {
        console.log(elem, index, arr);
    });

    const fruits = ['사과', '메론', '수박', '복숭아'];
    const resultArr = [];
    fruits.forEach(function(elem, index) {
        resultArr.push(elem + '빵');
    });
    console.log(fruits);
    console.log(resultArr);

    const phoneNumbers = ['010-1234-5678', '02-987-4321', '031-456-7890'];
    const membership = [];
    phoneNumbers.forEach(function(elem) {
        // 1. elem 마지막 4개
        // 2. '-'을 기준으로 분할 -> index 2인 요소
        console.log(elem.slice(-4));
        membership.push(elem.slice(-4));
    });
    console.log(phoneNumbers);
    console.log(membership);
}

{
    console.log('----- 2. map -----');
    const arr = ['a', 'b', 'c'];
    console.log(
        arr.map((elem, index, arr) => {
            console.log(elem, index, arr);
            return elem + '!!';
        })
    );
    // console.log(arr.map(elem => elem + '!!'));

    const fruits = ['사과', '메론', '수박', '복숭아'];
    const resultArr = fruits.map(elem => elem + '빵');
    
    console.log(fruits);
    console.log(resultArr);

    const phoneNumbers = ['010-1234-5678', '02-987-4321', '031-456-7890'];
    const membership = phoneNumbers.map((el) => el.split('-')[2]);
    console.log(membership);

    const users = [
        { name: '라이캣', level: 30, id: 1, color: 'orange' },
        { name: '빙키', level: 10, id: 2, color: 'pink' },
        { name: '소울곰', level: 20, id: 3, color: 'green' },
    ];
    const names = users.map(el => el.name);
    console.log('name', names);
}

{
    console.log('----- 3. for...of... -----');

    const fruits = ['사과', '메론', '수박', '복숭아'];
    for(const fruit of fruits) {
        console.log(fruit);
    }
}

{
    console.log('----- 4. reduce -----');
    const arr = [1, 2, 3, 4, 5];
    const result = arr.reduce(function(acc, cur) {
        console.log(`acc: ${acc}, cur: ${cur}`);
        return acc + cur;
    }, 0);
    console.log(result);

    const resultMul = arr.reduce((acc, cur) => acc * cur, 1);
    console.log(resultMul);
}

console.log('===== 조건 =====');

{
    console.log('----- 1. find, findIndex -----');
    const users = [
        { name: '라이캣', level: 30, id: 1, color: 'orange' },
        { name: '빙키', level: 10, id: 2, color: 'pink' },
        { name: '소울곰', level: 20, id: 3, color: 'green' },
    ];

    const user = users.find((elem, idx, arr) => {
        return elem.level > 15;
    });
    console.log(user);

    const userIndex = users.findIndex((elem) => elem.level > 10);
    console.log(userIndex);
}

{
    console.log('----- 2. filter -----');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // 짝수는 2로 나눈 나머지는 항상 0 / 홀수는 2로 나눈 나머지는 항상 1
    const evens = numbers.filter((el) => !(el % 2));
    console.log(evens);

    const odds = numbers.filter((el) => el % 2);
    console.log(odds);

    const users = [
        { name: '라이캣', level: 30, id: 1, color: 'orange' },
        { name: '빙키', level: 10, id: 2, color: 'pink' },
        { name: '소울곰', level: 20, id: 3, color: 'green' },
    ];
    const strongUser = users.filter((el) => el.level > 15);
    console.log(strongUser);
}
{
    console.log('----- 3. some과 every -----');
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers = [1, 3, 5, 7, 9];

    const hasEven = numbers.some((el) => !(el % 2));
    console.log('hasEven', hasEven);

    const allOdd = numbers.every((el) => el % 2);
    console.log('allOdd', allOdd)
}
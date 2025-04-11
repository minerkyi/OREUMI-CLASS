// [실습] 텍스트에 저장되어 있는 JSON 포멧의 문자열을 처리
// 1. 도서목록에서 대출 가능(avaliable 속성이 true)인 책의 도서 제목을 배열로 출력
const 도서목록 = '[{"id":1,"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Novel","available":true},{"id":2,"title":"To Kill a Mockingbird","author":"Harper Lee","year":1960,"genre":"Novel","available":false},{"id":3,"title":"1984","author":"George Orwell","year":1949,"genre":"Dystopian","available":true},{"id":4,"title":"Pride and Prejudice","author":"Jane Austen","year":1813,"genre":"Romance","available":true},{"id":5,"title":"The Catcher in the Rye","author":"J.D. Salinger","year":1951,"genre":"Novel","available":false}]';
// 풀이
// 1. 자바스크립트에서 사용 가능한 객체 JSON.parse()
const arr = JSON.parse(도서목록);
console.log(arr);
console.log(arr.filter((el) => el.available).map((el) => el.title));
/*
const bookJson = JSON.parse(도서목록);
const bookAvailable = bookJson.filter((book) => book.available).map((book) => book.title);
*/

// 2. 텍스트로 되어있는 데이터를 파싱해서 오름차순 / 내림차순 정렬
const json = '[{"_id":"5e80777f673acf89c007ff91","age":27,"eyeColor":"green","name":"Angelina Chang","gender":"female","email":"angelinachang@kangle.com","phone":"+1 (938) 477-2821"},{"_id":"5e80777feee717674b817fd2","age":25,"eyeColor":"green","name":"Deidre Cobb","gender":"female","email":"deidrecobb@kangle.com","phone":"+1 (938) 477-2824"},{"_id":"5e80777fac368a4578dda85d","age":25,"eyeColor":"blue","name":"Jolene Franks","gender":"female","email":"jolenefranks@kangle.com","phone":"+1 (985) 536-3981"},{"_id":"5e80777ff3717874cbc78e44","age":31,"eyeColor":"brown","name":"Waters Hardin","gender":"male","email":"watershardin@kangle.com","phone":"+1 (938) 559-2224"},{"_id":"5e80777fe36842ea9e024fcd","age":34,"eyeColor":"green","name":"Jody Chaney","gender":"female","email":"jodychaney@kangle.com","phone":"+1 (878) 587-2602"},{"_id":"5e80777fafd591f57344eb33","age":31,"eyeColor":"green","name":"Ortiz Maldonado","gender":"male","email":"ortizmaldonado@kangle.com","phone":"+1 (986) 509-2753"},{"_id":"5e80777f20e48e9ada226862","age":25,"eyeColor":"brown","name":"Stacy Burris","gender":"female","email":"stacyburris@kangle.com","phone":"+1 (864) 577-3500"},{"_id":"5e80777faf334f84a2c90595","age":33,"eyeColor":"brown","name":"Davenport Levy","gender":"male","email":"davenportlevy@kangle.com","phone":"+1 (990) 600-2700"}]';
// const data = JSON.parse(json);

let click = true;
function sort(key) {
    if (click) {
    click = false;
    //풀이
    let sortedData = JSON.parse(json).sort((a,b) => {
        if(a[key] < b[key]) {
            return -1;
        } else if(a[key] > b[key]) {
            return 1;
        } else {
            return 0;
        }
    });
    // let sortedData = data.sort((a, b) => {
    //     return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    // });
        /* key 값의 오름차순으로 정렬합니다 */
        renderTable(sortedData);
    } else {
    click = true;
    //풀이
    let sortedData = JSON.parse(json).sort((a,b) => {
        if(a[key] > b[key]) {
            return -1;
        } else if(a[key] < b[key]) {
            return 1;
        } else {
            return 0;
        }
    });
    // let sortedData = data.sort((a, b) => {
    //     return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
    // });
        /* key 값의 내림차순으로 정렬합니다 */
        renderTable(sortedData);
    }
}

function renderTable(data) {
    let tableBodyData = [];

    for (var variable of data) {
    tableBodyData.push(`
            <tr>
                <td>${variable._id}</td>
                <td>${variable.age}</td>
                <td>${variable.eyeColor}</td>
                <td>${variable.name}</td>
                <td>${variable.gender}</td>
                <td>${variable.email}</td>
                <td>${variable.phone}</td>
            </tr>
        `);
    }
    document.querySelector('#renderingDataTable > tbody').innerHTML =
    tableBodyData.join('');
}

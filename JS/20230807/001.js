// arr(*****)

// 배열을 생성하는 방법
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);

const arr = [10, 20, 30];
// mutable, 배열(Array)
arr[0] = 100; // // 변경가능, mutable
// arr = 100
// arr = [10, 20, 30]
// [10, 20, 30] == [10, 20, 30]
// [10, 20, 30] == [10, 20, 30]
// false
// arr == [10, 20, 30]
// false
console.log(arr);
console.dir(arr); // 프러퍼티와 메서를 볼 수 있습니다.
// immutable, 문자열(string)
const s = 'hello world';
console.log(s[0]);
s[0] = 'i'; // 불변, immutable

// 1. array에 여러가지 형태
let arr1 = [];

let arr2 = [1, 2, 3];

let arr3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
arr3[0]; // [1, 2, 3]
arr3[1]; // [4, 5, 6]
arr3[2]; // [7, 8, 9]
arr3[1][2]; // 6

let arr4 = ['leehojun', 10, 180]; // 이렇게 여러개의 타입이 혼합되어 쓰시는 것을 권하진 않습니다.
arr4[0]; // 'leehojun'
arr4[0][3]; // 'h'

// 2. array에 길이 출력
let arr1_1 = [1, 2, 3];
arr1_1.length; // 3
arr1_1.length = 100;
arr1_1; // [1, 2, 3, empty × 97]
arr1_1[10] = null;
arr1_1; // [1, 2, 3, empty × 7, null, empty × 89]

let arr1_2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
arr1_2.length; // 3
arr1_2.flat().length;

// 프로퍼티를 추가하는 것도 가능합니다.
// 가능하다 해서 실무에 사용하지 않습니다.
arr['leehojun'] = 100;
arr.hojun = 1000;

// 참고로 함수도 프로퍼티는 추가가 가능합니다.
// 가능하다 해서 실무에 사용하지 않습니다.
function test() {}
test.hojun = 1000;

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]; // 메트릭스
const d = [
    [
        [1, 2],
        [1, 2],
        [1, 2],
    ],
    [
        [1, 2],
        [1, 2],
        [1, 2],
    ],
    [
        [1, 2],
        [1, 2],
        [1, 2],
    ],
]; // 텐서(3차원 이상의 다차원)
// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다.

let arrFlat = [
    [[10, 20], [10, [10, 20]], 3],
    [[10, 20], [10, [10, 20]], 6],
    [[10, 20], [10, [10, 20]], 9],
];
arrFlat.flat();
arrFlat.flat().flat().flat();
arrFlat.flat(3);
arrFlat.flat(Infinity);

// 중요도 높습니다!
// push - 배열의 뒤에 값을 추가한다
// 반환값: undefined
// pop - 뒤에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// unshift - 배열의 앞에 값을 추가한다
// 반환값: 배열의 길이
// shift - 앞에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// 문제
// push, pop, unshift, shift를 이용하여 다음과 같은 배열을 만들어보세요.
// 입력값: [10, 20, 30, 40]
// 출력값: [10, 100, 20, 30, 50]
let arr_q1 = [10, 20, 30, 40];
arr_q1.pop();
arr_q1.push(50);
arr_q1.shift();
arr_q1.unshift(100);
arr_q1.unshift(10);

// 1. splice
// arr.splice(start, deleteCount, item1, item2, ...)
let arr = [10, 20, 30];
arr.splice(1, 0, 100); // 1번째에, 0개를 지우고, 100을 넣어라

let arr = [10, 20, 30];
arr.splice(1, 1, 100, 200); // 1번째에, 1개를 지우고, 100과 200을 넣어라

let arr = [10, 20, 30];
arr.splice(1, 1, [100, 200]); // 1번째에, 1개를 지우고, [100, 200]을 넣어라

////////////
// 같이 풀 문제
let arr = [10, 20, 30, 40];
let x = [1, 2, 3];
// 만들고 싶은 값: [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 100]

// 방법 1
let arr = [10, 20, 30, 40];
let y = [1, 2, 3];
arr.splice(1, 0, ...y);
arr.splice(7, 0, ...y); // arr.push(...x) 또는 arr.push(1, 2, 3) 또는 arr.push(...[100, 200, 300])
arr.push(100);

// 방법 2
let arr = [10, 20, 30, 40];
let x2 = [1, 2, 3];
arr.splice(1, 0, x2[0], x2[1], x2[2]);
// 생략

////////////
// splice에서 인자값을 하나만 넣으면, 그 인덱스부터 끝까지 다 지운다.
// splice에서 인자값을 두개만 넣으면, 두번째 인자값부터 끝까지 다 지운다.
let arr = [10, 20, 30, 40];
arr.splice(1); // 1번째부터 끝까지 다 지워라
arr.splice(1, 2); // 1번째부터 2개를 지워라(삽입값은 없습니다.)

// 2. slice
// arr.slice(start, end)
// 주의! 원본은 수정되지 않습니다!
// 비교! splice는 원본을 수정합니다!
let arr = [10, 20, 30, 40];
arr.slice(1, 3); // 1번째부터 3번째 전까지(2번째까지) 자른다.
arr.slice(1, 10000); // index에 없는 값도 오류가 생기지 않습니다! splice도 마찬가지입니다.
arr.slice(100, 10000); // index에 없는 값도 오류가 생기지 않습니다! splice도 마찬가지입니다.

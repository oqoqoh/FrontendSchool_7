// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter((v) => v % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듭니다.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = arr2.filter((v) => {
    return true;
});
result2;

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result3 = arr3.filter((v) => {
    return false;
});
result3;

// filter는 메서드 체이닝으로 많이 사용됩니다.

// reduce
[10, 20, 30, 40, 50]
    .reduce((a, c) => a + c, 0) // 암기코드
    [(10, 20, 30, 40, 50)].reduce((a, c) => a + c) // X

    [
        //[].reduce((a, c) => a + c) // X

        //1.
        (10, 20, 30, 40, 50)
    ].reduce((a, c) => {
        console.log(a, c);
        return a + c;
    })

    [
        // 파라미터 이름은 자유롭게 지정할 수 있습니다.
        // forEach, map, filter, reduce 등의 메서드 모두 마찬가지 입니다.
        (10, 20, 30, 40, 50)
    ].reduce((ho, jun) => {
        console.log(ho, jun);
        return ho + jun;
    });

// includes
const arr11 = ['hello', 'world', 'hojun'];
arr11.includes('world');

const arr12 = ['hello', 'world', 'hojun'];
arr12.includes('leehojun');

const arr13 = ['hello', 'world', 'hojun'];
arr13.includes('jun');

//join(***)
let arr_j1 = ['hello', 'world', 'hojun'];
arr_j1.join('!'); // hello!world!hojun

let arr_j2 = ['hello', 'world', 'hojun'];
arr_j2.join(' ');

let arr_j3 = ['010', '5044', '2903'];
arr_j3.join('-');

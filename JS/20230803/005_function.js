// 함수 설명
// 건물올리기를 할 예정입니다.

// 땅다지기()
// 말뚝세우기()
// 기초콘크리트()
// 철근바인딩()
// 기둥세우기()
// 외벽내벽올리기()
// 지붕올리기()

// 1번째 장점
// 이 코드를 보고 건물올리기를 한다는 것을 알 수 있습니다.(아키텍처를 파악하기 용이합니다.)

// 2번째 장점
// 유지보수할 때 예를 들어 기둥에 문제가 생기면 기둥세우기() 함수로 가면 됩니다.

// 3번째 장점
// 재사용성이 높습니다. 새로운 건물 새울 때 똑같은 함수를 다시 사용하면 됩니다.

function 땅다지기() {}

function 말뚝세우기() {}

function 기초콘크리트() {}

function 철근바인딩() {}

function 기둥세우기() {}

function 외벽내벽올리기() {}

function 지붕올리기() {}

function replaceComma(str) {
    return str.replace(',', '');
}
function printAndSplitArgument(str) {
    return str.split('');
}
printAndSplitArgument('world');

function sumThenMutiply(num1, num2) {
    let sum = parseInt(num1 + num2);
    return sum * sum;
}

function equationSample(num) {
    return num ** 2 + num * 4 - 12;
}

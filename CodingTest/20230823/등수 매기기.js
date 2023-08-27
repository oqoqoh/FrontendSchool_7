function solution(score) {
    const avg = [];
    let sortAvg = [];
    let grade = 0;

    // avg[]: 평균값 배열 생성
    score.map((v) => {
        avg.push(v.reduce((a, c) => a + c, 0));
    });

    // sortAvg[]: 평균값 내림차순으로 정렬
    sortAvg = [...avg].sort((a, b) => b - a);

    // sortAvg[] -> 하나씩 avg[]에서 같은 값 찾아 등수로 변경
    sortAvg.map((v, i) => {
        if (i > 0 && v === sortAvg[i - 1]) {
            avg[avg.indexOf(v)] = grade.toString();
            return;
        }

        avg[avg.indexOf(v)] = (i + 1).toString();
        grade = i + 1;
    });

    return avg.map(Number);
}

`
score	                                    result
[[80, 70], [90, 50], [40, 70], [50, 80]]	[1, 2, 4, 3]

[[80, 70], [70, 80], [30, 50], [90, 100], 
[100, 90], [100, 100], [10, 30]]	        [4, 4, 6, 2, 2, 1, 7]

[[80, 70], [70, 80], [30, 50], [90, 100], 
[100, 90],[100, 90], [100, 100], [10, 30]]	 [5, 5, 7, 2, 2, 2, 1, 8]

[[1, 3], [3, 1], [2, 3],
[3, 2], [1, 2], [0, 0]]                     [3, 3, 1, 1, 5, 6]
`;

const score = [
    [1, 3],
    [3, 1],
    [2, 3],
    [3, 2],
    [1, 2],
    [0, 0],
];
solution(score);

function solution2(score) {
    const avg = [];
    let sortAvg = [];
    let grade = 0;

    score.map((v) => {
        avg.push(v.reduce((a, c) => a + c, 0));
    });
    console.log(`avg::  `, avg);

    sortAvg = [...avg].sort((a, b) => b - a);
    console.log(`sortAvg::  `, sortAvg);

    sortAvg.map((v, i) => {
        console.log(`------${i}`);
        if (i > 0 && v === sortAvg[i - 1]) {
            console.log(`v -> ${v}  /  grade -> ${grade}  /  avg[${avg.indexOf(v)}]`);
            avg[avg.indexOf(v)] = grade.toString();
            console.log('***avg ::', avg);

            return;
        }

        console.log(`v -> ${v}  /  grade -> ${i + 1}  /  avg[${avg.indexOf(v)}]`);
        avg[avg.indexOf(v)] = (i + 1).toString();
        console.log('avg ::', avg);
        grade = i + 1;
    });

    return avg.map(Number);
}

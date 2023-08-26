function solution(numbers) {
    const numLiterals = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = numbers;

    numLiterals.map((v, i) => {
        result = result.replaceAll(v, i);
    });

    return parseInt(result);
}

`
"onetwothreefourfivesixseveneightnine"	123456789
"onefourzerosixseven"	14067
`;

const numbers = 'onefourzerosixseven';

solution(numbers);

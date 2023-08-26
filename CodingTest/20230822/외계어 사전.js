function solution(spell, dic) {
    let dicCopy = [...dic];
    let count = 0;
    let checkWord = '';

    // spell[] 한 글자씩 dic[]에서 '0'으로 변환
    spell.map((letter, _) => {
        dicCopy.forEach((word, j) => {
            dicCopy[j] = word.replace(letter, '0');
        });
    });

    // spell[] length 만큼 '000...' 검증 단어 생성
    while (spell.length > count) {
        checkWord += '0';
        count++;
    }

    // spell[]의 모든 글자가 사용된 dic[] 값이 존재하는지 확인
    if (dicCopy.includes(checkWord)) return 1;
    else return 2;
}

`
spell	dic	result
["p", "o", "s"]	["sod", "eocd", "qixm", "adio", "soo"]	2
["z", "d", "x"]	["def", "dww", "dzx", "loveaw"]	1
["s", "o", "m", "d"]	["moos", "dzx", "smm", "sunmmo", "som"]	2
`;

const spell = ['z', 'd', 'x'];
const dic = ['def', 'dww', 'dzx', 'loveaw'];

console.log(solution(spell, dic));

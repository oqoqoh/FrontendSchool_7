function solution(s) {
    const arr = s.split(' ');
    let sum = 0;

    arr.map((v, i) => {
        if (i > 0 && v === 'Z') {
            sum -= parseInt(arr[i - 1]);
            return;
        }
        sum += parseInt(v);
    });

    return sum;
}

`
s	            result
"1 2 Z 3"	    4
"10 20 30 40"	100
"10 Z 20 Z 1"	1
"10 Z 20 Z"	    0
"-1 -2 -3 Z"	-3
`;

const s = '-1 -2 -3 Z';
solution(s);

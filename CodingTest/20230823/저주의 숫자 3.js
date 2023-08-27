function solution(n) {
    let count = 1;

    for (let i = 1; i <= n; i++) {
        while (count % 3 === 0 || count.toString().includes('3')) {
            count++;
        }
        count++;
    }
    return count - 1;
}

`
10진법	3x 숫자	 10진법	 3x 숫자
1	    1	    6	    8
2	    2	    7	    10
3	    4	    8	    11
4	    5	    9	    14
5	    7	    10   	16
`;
// 15 -> 25
// 40 -> 76
const n = 40;
solution(n);

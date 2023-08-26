function solution(A, B) {
    let before = [...A];
    let after = [...B];
    let count = 0;
    let possible = false;

    // A를 오른쪽으로 한 칸 씩 옮겨서, B와 같은지 확인
    while (before.length >= count) {
        if (before.join() === after.join()) {
            possible = true;
            break;
        }
        before.unshift(before.pop());
        count++;
    }

    if (possible) return count;
    else return -1;
}

`
A	    B	  result
"hello"	"ohell"	1
"apple"	"elppa"	-1
"atat"	"tata"	1
"abc"	"abc"	0
`;

const A = 'hello';
const B = 'ohell';
solution(A, B);

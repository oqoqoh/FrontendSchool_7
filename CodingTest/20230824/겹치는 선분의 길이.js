// 풀이 참조
function solution(lines) {
    const stack = [];
    const linesObj = {};
    lines.forEach(([start, end]) => {
        for (let i = start; i < end; i++) {
            if (linesObj[i + 0.5] === undefined) {
                linesObj[i + 0.5] = true;
            } else {
                if (!stack.includes(i + 0.5)) {
                    stack.push(i + 0.5);
                }
            }
        }
    });
    const answer = stack.length;
    return answer;
}

`
lines	                    result
[[0, 1], [2, 5], [3, 9]]	2
[[-1, 1], [1, 3], [3, 9]]	0
[[0, 5], [3, 9], [1, 10]]	8
`;

function solution(board) {
    board.map((row, i) => {
        let draw = '';
        row.map((pixel, j) => {
            j === row.length - 1 ? (draw += pixel.toString() + '\n') : (draw += pixel.toString() + ' ');
        });
        console.log(draw);
    });
}

const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
const board2 = `[
    (0,0), (0,1), (0,2), (0,3), (0,4)
    (1,0), (1,1), (1,2), (1,3), (1,4)
    (2,0), (2,1), (2,2), (2,3), (2,4)
    (3,0), (3,1), (3,2), (3,3), (3,4)
    (4,0), (4,1), (4,2), (4,3), (4,4)
]`;
const board3 = `[
    [0,       0,      0,      0,     0],
    [0,  'true', 'true', 'true',     0],
    [0,  'true', ' 1  ', 'true',     0],
    [0,  'true', 'true', 'true',     0],
    [0,       0,      0,      0,     0],
]`;

`
(i-1,j-1) (i-1,j) (i-1,j+1)
(i,  j-1) (i, j)  (i,  j+1)
(i+1,j-1) (i+1,j) (i+1,j+1)
`;
//지뢰 x를 그리려하지 말고, 전체에서 갯수를 빼는 방법으로 하자.
function solution2(board) {
    const board2 = [...board];
    const rows = board.length;

    board.map((row, i) => {
        row.map((pixel, j) => {
            if (pixel === 1) {
                //switch
                //첫번째 행 && 첫번째 열
                //첫번째 행 && 마지막 열
                //첫번째 행
                //마지막 행 && 첫번째 열
                //마지막 행 && 마지막 열
                //마지막 행
                //첫번째 열
                //마지막 열
            }
        });
    });
}

solution2(board);

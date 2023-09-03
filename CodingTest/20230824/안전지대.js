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

function solution4(board) {
    let newBoard = [...board];
    const rows = board.length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            console.log(`board[${i}][${j}] ::`, board[i][j]);

            if (board[i][j] === 1) {
                if (i === 0 && j === 0) {
                    //첫번째 행 && 첫번째 열
                    newBoard[i][j + 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j + 1] = true;
                } else if (i === 0 && j === rows - 1) {
                    //첫번째 행 && 마지막 열
                    newBoard[i][j - 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j - 1] = true;
                } else if (i === 0) {
                    //첫번째 행
                    newBoard[i][j - 1] = true;
                    newBoard[i][j + 1] = true;
                    newBoard[i + 1][j - 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j + 1] = true;
                } else if (i === rows - 1 && j === 0) {
                    //마지막 행 && 첫번째 열
                    newBoard[i - 1][j] = true;
                    newBoard[i - 1][j + 1] = true;
                    newBoard[i][j + 1] = true;
                } else if (i === rows - 1 && j === rows - 1) {
                    //마지막 행 && 마지막 열
                    newBoard[i - 1][j - 1] = true;
                    newBoard[i - 1][j] = true;
                    newBoard[i][j - 1] = true;
                } else if (i === rows - 1) {
                    //마지막 행
                    newBoard[i - 1][j - 1] = true;
                    newBoard[i - 1][j] = true;
                    newBoard[i - 1][j + 1] = true;
                    newBoard[i][j - 1] = true;
                    newBoard[i][j + 1] = true;
                } else if (j === 0) {
                    //첫번째 열
                    newBoard[i - 1][j] = true;
                    newBoard[i - 1][j + 1] = true;
                    newBoard[i][j + 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j + 1] = true;
                } else if (j === rows - 1) {
                    //마지막 열
                    newBoard[i - 1][j - 1] = true;
                    newBoard[i - 1][j] = true;
                    newBoard[i][j - 1] = true;
                    newBoard[i + 1][j - 1] = true;
                    newBoard[i + 1][j] = true;
                } else {
                    newBoard[i - 1][j - 1] = true;
                    newBoard[i - 1][j] = true;
                    newBoard[i - 1][j + 1] = true;
                    newBoard[i][j - 1] = true;
                    newBoard[i][j + 1] = true;
                    newBoard[i + 1][j - 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j + 1] = true;
                }
            }
        }
    }
    console.log(newBoard);
}
solution4(board);

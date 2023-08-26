function solution(s) {
    const array = [...s];
    let filtered = [];

    [...s].map((letter) => {
        let count = 0;

        array.map((val) => {
            if (count > 1) {
                return;
            } else {
                val === letter && count++;
            }
        });
        count === 1 && filtered.push(letter);
    });
    const result = filtered.sort((a, b) => (a > b ? 1 : -1));

    return result.join('');
}

const s = 'hello';
//"abcabcadc" "d"
//"abdc"	"abcd"
//"hello"	"eho"
solution(s);

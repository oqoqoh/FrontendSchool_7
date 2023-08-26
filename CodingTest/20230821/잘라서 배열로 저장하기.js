function solution(myStr, n) {
    const arr = [...myStr];
    const result = [];

    let length = arr.length;

    while (length > 0) {
        let spliced = arr.splice(0, n).join('');
        result.push(spliced);
        length -= n;
    }

    return result;
}

function solution(polynomial) {
    let x = 0;
    let num = 0;
    let result = '';

    polynomial.split(' + ').forEach((element) => {
        if (element.includes('x')) {
            if (element.length > 1) {
                const preX = parseInt(element.replace('x', ''));
                x += preX;
            } else {
                x += 1;
            }
        } else {
            num += parseInt(element);
        }
    });

    if (x !== 0 && num !== 0) {
        x === 1 ? (result = `x + ${num}`) : (result = `${x}x + ${num}`);
    } else if (x !== 0 && num === 0) {
        x === 1 ? (result = `x`) : (result = `${x}x`);
    } else {
        result = `${num}`;
    }

    return result;
}

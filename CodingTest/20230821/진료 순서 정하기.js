function solution(emergency) {
    let answer = [];

    let sortValue = [...emergency].sort((a, b) => b - a);

    emergency.forEach((v, i) => {
        emergency[i] = sortValue.indexOf(v) + 1;
    });

    return emergency;
}

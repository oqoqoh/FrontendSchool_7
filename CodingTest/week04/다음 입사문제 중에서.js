//1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)
//예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

let arr = [1, 3, 4, 8, 13, 17, 20];
let arr2 = [...arr];
let result = [];

let distance = 0;

arr.forEach((num, i) => {
    arr2.forEach((num2, j) => {
        if (i < j) {
            //console.log(`${num} -> ${num2}`);

            if (distance === 0) {
                distance = Math.abs(num - num2);
                //console.log('distance0 : ', distance);
            } else {
                if (distance >= Math.abs(num - num2)) {
                    distance = Math.abs(num - num2);
                    result.push(`(${num},${num2})`);
                }
                //console.log('distance : ', distance);
            }
        }
    });
});

console.log(result);

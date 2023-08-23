// 1. primitive
//number, string, boolean, null, undefined, simbol
let age = 5;
let age2 = age;

//age 메모리에 할당 된 값을 age2에 복사해왔기 때문에 두 값은 같다.
console.log(age);
console.log(age2);

//age 메모리의 값만 변경. age2는 그대로 5이다.
age = 10;
console.log(age);
console.log(age2);

// 2. object
const person = {
    name: 'oh',
    height: 182,
};

//TypeError: Assignment to constant variable.
//const는 ref 주소 자체를 바꿀 수는 없다.
person = {
    name: 'lee',
    height: 175,
};

//ref 주소 안의 key의 메모리 할당 값은 변경 가능하다.
//person : ref 주소 할당
//ref 주소 : name, height 메모리 공간
const person2 = person;

person.name = 'kim';

//person, person2는 동일한 ref주소를 바라보기 때문에 값은 동일하다.
console.log(person.name);
console.log(person2.name);

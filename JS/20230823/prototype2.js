// arr 가 hasOwnProperty를 사용할수 있는것은 prototype 을 통해서 상속 받았기 때문!!
const obj = {
    name: 'test',
};

console.log(obj.hasOwnProperty('name'));

const arr = [1, 2, 3];

console.log(arr.hasOwnProperty('name'));

function Parent() {
    this.name = '재현';
}
Parent.prototype.rename = function (name) {
    this.name = name;
};
Parent.prototype.sayName = function () {
    console.log(this.name);
};

function Child() {}

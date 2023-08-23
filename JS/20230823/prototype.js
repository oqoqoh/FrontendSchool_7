function NewFactory(name) {
    this.name = name;
    this.sayYourName = function () {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    };
}

let robot1 = new NewFactory('브랜든');

robot1.sayYourName === NewFactory.sayYourName; // false

// prototype
function NewFactory2(name) {
    this.name = name;
}

NewFactory2.prototype.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
};

let robot2 = new NewFactory('브랜든');

robot2.sayYourName === NewFactory2.sayYourName; // true

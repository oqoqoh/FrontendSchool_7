class Sausage {
    constructor(flavor1, flavor2) {
        this.flavor1 = flavor1;
        this.flavor2 = flavor2;
    }
    taste() {
        console.log(`${this.flavor1}와 ${this.flavor2} 맛이 난다!`);
    }
}

class FiresSausage extends Sausage {}

const newSausage = new FiresSausage('아삭아삭 다진 양파', '소량의 케챱과 머스타드');

newSausage.taste();

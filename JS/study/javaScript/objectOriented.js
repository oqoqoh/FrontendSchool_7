'use strict';

// Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    /** call stack size exceeded
     *  getter를 정의하면 'this.age'는 할당된 메모리에서 불러오지않고 'get age()'를 호출
     *  setter를 정의하면 값을 할당할 때 '= age'로 메모리에 할당하지 않고 'set age()'를 호출
     *  그래서 setter의 '= value'은 메모리에 할당이 아닌 'set age()'를 다시 호출하면서 계속 반복
     *  이런 현상을 방지하기 위해 getter, setter의 this.변수명을 다르게 쓴다.
     *  User 클래스안에는 firstName, lastNmae, _age 이렇게 3개의 필드가 존재하게 된다.
    get age() {
        return this.age;
    }

    set age(value) {
        this.age = value;
    }
     */
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('kyuYOung', 'Oh', -1);

// Fields (public, private)
// Too soon! no support Safari yet
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// Static properties nad methods
// Too soon!
class Article {
    static publisher = 'Peguins';

    constructor(acticleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
article1.publisher; // undefined
Article.publisher; // Peguins

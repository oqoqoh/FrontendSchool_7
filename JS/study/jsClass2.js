class Counter {
    constructer(runEveryFiveTimes) {
        this.counter = 0;
        //재조립 가능한 형태로 만드는것이 중요!
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback(this.counter);
        }
    }
}

//callback 함수를 밖으로 빼서 사용하면 원하느 기능으로 재조립 가능하다.
function printIfFiveTimes(num) {
    console.log(`it's ${num}`);
}
function alertIfFiveTimes(num) {
    alert(`it's ${num}`);
}

//생성자 자체에 원하는 함수를 세팅
const printCounter = new Counter(printIfFiveTimes);

classCounter.increase();
classCounter.increase();
classCounter.increase();
classCounter.increase();
classCounter.increase();

const alertCounter = new Counter(alertIfFiveTimes);

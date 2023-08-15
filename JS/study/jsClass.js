class Counter {
    constructer() {
        this.counter = 0;
    }

    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            runIf5Times(this.counter);
        }
    }
}

//callback 함수를 밖으로 빼서 사용하면 원하느 기능으로 재조립 가능하다.
function replyIfFiveTimes(num) {
    console.log(`it's ${num}`);
}

const classCounter = new Counter();

classCounter.increase(replyIfFiveTimes);
classCounter.increase(replyIfFiveTimes);
classCounter.increase(replyIfFiveTimes);
classCounter.increase(replyIfFiveTimes);
classCounter.increase(replyIfFiveTimes);

class Counter {
    constructer(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            //this.callback이 존재할때 실행
            this.callback && this.callback(this.counter);
        }
    }
}

//생성자 자체에 원하는 함수를 세팅
//만약 아무 콜백을 전달하지 않으면, constructer의 callback은 undefined여서 typeError!
const classCounter = new Counter();

classCounter.increase();
classCounter.increase();
classCounter.increase();
classCounter.increase();
classCounter.increase();

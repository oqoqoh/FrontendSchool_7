describe('viewManager TEST', () => {
    it('viewManager params : textManager', () => {
        const btnEl = document.createElement('button');
        const inpTxt = document.createElement('input');
        const viewerEl = document.createElement('strong');
        const textManager = '';

        // unit 테스트의 actual은 테스트 중인 함수 혹은 코드의 반환 값을 의미
        // actual로 전달시, 함수 형태로 만들어서 할당
        const actual = () => new ViewManager(textManager, { viewerEl, inpTxt, btnEl });

        // toThrowError : 코드에서 실제로 에러가 발행하고 있는지 검증
        expect(actual).toThrowError();
    });

    it('viewManager params : options', () => {
        //const btnEl = document.createElement('button');
        const btnEl = null;
        const inpTxt = document.createElement('input');
        const viewerEl = document.createElement('strong');
        const textManager = new TextManager();

        // unit 테스트의 actual은 테스트 중인 함수 혹은 코드의 반환 값을 의미
        // actual로 전달시, 함수 형태로 만들어서 할당
        const actual = () => new ViewManager(textManager, { viewerEl, inpTxt, btnEl });

        // toThrowError : 코드에서 실제로 에러가 발행하고 있는지 검증
        expect(actual).toThrowError();
    });

    const btnEl = document.createElement('button');
    const inpTxt = document.createElement('input');
    const viewerEl = document.createElement('strong');
    const textManager = new TextManager();
    const viewManager = new ViewManager(textManager, { viewerEl, inpTxt, btnEl });

    it('click event -> changeValue()', () => {
        // 특정한 객체의 함수를 감시
        spyOn(viewManager, 'changeValue');
        btnEl.click();

        // toHaveBeenCalled : 특정 함수가 호출이 된적이 있는지 확인
        expect(viewManager.changeValue).toHaveBeenCalled();
    });

    it('changeValue() -> updateView()', () => {
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();

        expect(viewManager.updateView).toHaveBeenCalled();
    });
});

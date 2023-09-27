describe('textManager TEST', () => {
    const textManager = new TextManager();

    it('getVlaue', () => {
        const initValue = textManager.getValue();

        expect(textManager.getValue()).toBe(initValue);
    });

    it('setValue', () => {
        const txt = 'welcome!';
        textManager.setValue(txt);

        expect(textManager.getValue()).toBe(txt);
    });
});

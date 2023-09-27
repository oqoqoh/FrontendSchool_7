// test 유닛들을 묶어주고, 전체적인 설명을 제공하는 함수입니다.
describe('jasmine test', () => {
    // it 함수는 테스트 유닛을 의미
    it('1를 더해주는 함수', () => {
        let num = 30;

        // expect : 기대식, 실행할 함수의 결과값을 기대합니다.
        // toBe : matcher 함수, 기대한 결과가 실제로 일치하는지 판단하는 함수입니다.
        expect(plusOne(30)).toBe(31);
    });
});

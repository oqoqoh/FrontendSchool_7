class VendingMachineFunc {
    constructor() {
        // section1
        const vMachine = document.querySelector('.section1');
        this.balance = vMachine.querySelector('.bg-box p');
        this.itemList = vMachine.querySelector('.cola-list');
        this.inputCostEl = vMachine.querySelector('#input-money');
        this.btnPut = vMachine.querySelector('#input-money+.btn');
        this.btnReturn = vMachine.querySelector('.bg-box+.btn');
        this.btnGet = vMachine.querySelector('.btn-get');
        this.stagedList = vMachine.querySelector('.get-list');

        // section2
        const myInfo = document.querySelector('.section2');
        this.myMoney = myInfo.querySelector('.bg-box p');

        // section3
        const getInfo = document.querySelector('.section3');
        this.getList = getInfo.querySelector('.get-list');
        this.txtTotal = getInfo.querySelector('.total-price');
    }

    setup() {
        this.bindEvents();
    }

    // 장바구니에 선택한 음료수 목록 생성
    stagedItemGenerator(target) {
        const stagedItem = document.createElement('li');
        stagedItem.dataset.item = target.dataset.item;
        stagedItem.dataset.img = target.dataset.img;
        stagedItem.dataset.price = target.dataset.price;
        stagedItem.innerHTML = `
        
            <img src="./img/${target.dataset.img}" alt="" />
            ${target.dataset.item}
            <strong>
                1
                <span class="a11y-hidden">개</span>
            </strong>
        
        `;
        this.stagedList.append(stagedItem);
    }

    bindEvents() {
        /**
         * 1.입금 버튼 기능
         * 소지금 = 소지금 - 입금액
         * 잔액 = 잔액 + 입금액
         * 입금액 > 소지금 ? '소지금 부족 경고'
         * 입금액 input clear
         */
        this.btnPut.addEventListener('click', (event) => {
            // 사용자 입력값
            const inputCost = parseInt(this.inputCostEl.value);
            // 현재 사용자의 돈
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
            // 현재 자판기 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

            // 입금액이 있다면
            if (inputCost && inputCost > 0) {
                if (inputCost <= myMoneyVal) {
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + ' 원';

                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + ' 원';
                } else {
                    alert('소지금이 부족합니다.');
                }

                this.inputCostEl.value = null;
            }
        });

        /**
         *  2. 거스름돈 반환 기능
         *  반환 버튼을 누르면 소지금 = 소지금 + 잔액
         *  잔액창은 초기화
         */
        this.btnReturn.addEventListener('click', () => {
            // 현재 사용자의 돈
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
            // 현재 자판기 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

            if (balanceVal) {
                this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal + balanceVal) + ' 원';

                this.balance.textContent = null;
            }
        });

        /**
         *  3. 자판기 메뉴 기능
         *  콜라를 누르면, 잔액 = 잔액 - 콜라 가격
         *  잔액 < 콜라 가격, alert
         *  콜라가 장바구니에 등록
         *  콜라 dataset 정보 count 변경
         *  data-count = 0 -> button + disabled + 탬플릿에 <strong> 추가
         */
        const colaBtns = this.itemList.querySelectorAll('button');

        colaBtns.forEach((colaBtn) => {
            colaBtn.addEventListener('click', (event) => {
                const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
                const targetElPrice = parseInt(colaBtn.dataset.price);
                const stagedListItem = this.stagedList.querySelectorAll('li');
                let isStaged = false;

                if (balanceVal >= targetElPrice) {
                    // 잔액 차감
                    this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + ' 원';

                    for (const item of stagedListItem) {
                        // 중복 선택 아이탬, 갯수만 증가
                        if (item.dataset.item === colaBtn.dataset.item) {
                            let itemTxt = item.querySelector('strong');
                            itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 1;

                            isStaged = true;
                            break;
                        }
                    }
                    // 장바구니 등록
                    !isStaged && this.stagedItemGenerator(colaBtn);

                    // 카운트 감소
                    colaBtn.dataset.count--;

                    // 품절 처리
                    if (parseInt(colaBtn.dataset.count) === 0) {
                        //colaBtn.disabled = 'disabled';
                        colaBtn.disabled = true;

                        colaBtn.insertAdjacentHTML('afterbegin', '<strong class="soldout">품절</strong>');
                    }
                } else {
                    alert('잔액이 부족합니다.');
                }
            });
        });

        /**
         *  4. 획특 버튼
         *  획득 버튼 누르면, 장바구니 목록 -> 획득한 음료 목록으로 이동
         *  총금액 업데이트
         */
        this.btnGet.addEventListener('click', () => {
            const itemStagedList = this.stagedList.querySelectorAll('li');
            const itemGetList = this.getList.querySelectorAll('li');
            let totalPrice = 0;

            //this.getList.append(...itemStagedList);

            for (const itemStaged of itemStagedList) {
                let isStaged = false;

                for (const itemGet of itemGetList) {
                    if (itemStaged.dataset.item === itemGet.dataset.item) {
                        let itemTxt = itemGet.querySelector('strong');
                        itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + parseInt(itemStaged.querySelector('strong').firstChild.textContent);

                        isStaged = true;
                        break;
                    }
                }
                !isStaged && this.getList.append(itemStaged);
            }
            this.stagedList.innerHTML = null;

            // 총 금액 계산
            this.getList.querySelectorAll('li').forEach((itemGet) => {
                totalPrice += parseInt(itemGet.dataset.price) * parseInt(itemGet.querySelector('strong').firstChild.textContent);
            });

            this.txtTotal.textContent = `총 금액 : ${new Intl.NumberFormat().format(totalPrice)}   원`;
        });
    }
}

export default VendingMachineFunc;

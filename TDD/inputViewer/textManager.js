class TextManager {
    constructor() {
        this.value = { data: 'hello world!' };
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value.data = newValue;
    }
}

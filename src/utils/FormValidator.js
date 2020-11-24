export default class FormValidator {
    static number(from = Number.MIN_VALUE, to = Number.MAX_VALUE) {
        return (number) => {
            number = +number;
            return Number.isFinite(number) && 0 <= number && number < to
        }
    }

    static text() {
        return (text) => {
            return true
        }
    }
}
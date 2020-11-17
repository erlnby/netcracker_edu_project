import createElement from "../../utils/createElement";

export const template = function (ctx) {
    let start = createElement('div', ['start']);

    let start__text = createElement('div', ['start__text']);
    start__text.innerHTML = 'Simple Quantum Calculator';

    let start__button = createElement('button', ['start__button']);
    start__button.innerHTML = 'Try It';

    start.append(start__text, start__button);
    return {
        start,
        start__button,
        start__text
    };
}
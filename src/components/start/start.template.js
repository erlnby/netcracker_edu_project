import createElement from "../../utils/createElement";

export const template = function (ctx) {
    let start = createElement('div', ['start']);

    let startText = createElement('div', ['start__text'], 'Simple Quantum Calculator');

    let startButton = createElement('button', ['start__button'], 'Try It');

    start.append(startText, startButton);
    return {
        start,
        startButton,
        startText
    };
}
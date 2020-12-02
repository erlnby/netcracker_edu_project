import createElement from "../../utils/createElement";
import SizerComponent from "../sizer/sizer.component";

export const template = function (ctx) {
    let start = createElement('div', ['start']);

    let startText = createElement('div', ['start__text'], 'Simple Quantum Calculator');

    let startButton = createElement('button', ['start__button'], 'Try It');

    let startSizer = createElement('div', ['start__sizer'])
    startSizer.append(new SizerComponent().render())

    start.append(startText, startButton, startSizer);
    return {
        start,
        startButton,
        startText,
        startSizer
    };
}
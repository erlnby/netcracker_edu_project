import createElement from "../../utils/createElement";

export function template(ctx) {
    let header = createElement('header', ['header']);

    let headerText = createElement('div', ['header__text'], 'Simple Quantum Calculator');

    let headerHelp = createElement('div', ['header__help'], 'Help');

    header.append(headerText, headerHelp);
    return {header, headerHelp};
}


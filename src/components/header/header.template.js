import createElement from "../../utils/createElement";

export function template(ctx) {
    let header = createElement('header', ['header']);

    let headerText = createElement('div', ['header__text'], 'Simple Quantum Calculator');

    header.append(headerText);
    return header;
}


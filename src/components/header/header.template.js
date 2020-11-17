import createElement from "../../utils/createElement";

export function template(ctx) {
    let header = createElement('header', ['header']);

    let header__text = createElement('div', ['header__text']);
    header__text.innerHTML = 'Simple Quantum Calculator';

    header.append(header__text);
    return header;
}


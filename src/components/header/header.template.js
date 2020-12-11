import createElement from "../../utils/createElement";

export function template(ctx) {
    let header = createElement('header', ['header']);

    let headerText = createElement('div', ['header__text'], 'Simple Quantum Calculator');

    let headerContainer = createElement('div', ['header__container']);
    let headerTheme = createElement('div', ['header__theme'], 'Change theme');
    let headerHelp = createElement('div', ['header__help'], 'Help');

    headerContainer.append(headerTheme, headerHelp)
    header.append(headerText, headerContainer);
    return {header, headerHelp, headerTheme};
}


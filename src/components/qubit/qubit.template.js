import createElement from "../../utils/createElement";
import arrow from "../../assets/icons/up-arrow.svg"


export function template(ctx) {
    let qubit = createElement('div', ['qubit']);

    let qubit__name = createElement('div', ['qubit__name']);
    qubit__name.innerHTML = ctx.name

    let qubit__image = createElement('img', ['qubit__image']);
    qubit__image.style.transform = `rotate(${ctx.angle}deg)`;
    qubit__image.setAttribute('src', arrow);

    qubit.append(qubit__image, qubit__name);
    return qubit;
}
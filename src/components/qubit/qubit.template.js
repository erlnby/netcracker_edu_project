import createElement from "../../utils/createElement";
import arrow from "../../assets/icons/up-arrow.svg"


export function template(ctx) {
    let qubit = createElement('div', ['qubit']);
    qubit.dataset.qubitId = ctx.id;

    let qubitName = createElement('div', ['qubit__name'], ctx.name);

    let qubitImage = createElement('img', ['qubit__image'], null, {src: arrow});
    qubitImage.style.transform = `rotate(${ctx.angle}deg)`;

    qubit.append(qubitImage, qubitName);
    return qubit;
}
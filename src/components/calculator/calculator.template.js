import createElement from "../../utils/createElement";
import QubitComponent from "../qubit/qubit.component";
import plus from "../../assets/icons/plus.svg"
import FormComponent from "../form/form.component";
import HeaderComponent from "../header/header.component";

export function template(ctx) {
    let calculator = createElement('div', ['calculator']);

    let calculator__header = createElement('div', ['calculator__header'])
    calculator__header.append(new HeaderComponent().render());
    calculator.append(calculator__header);

    let calculator__qubits = createElement('ul', ['calculator__qubits']);

    ctx.qubits.forEach((value) => {
        calculator__qubits.append(templateQubitsItem(value));
    });

    let adder = templateAdder();
    calculator__qubits.append(adder);

    calculator.append(calculator__qubits);
    return {
        calculator,
        calculator__qubits
    };
}

export function templateQubitsItem(props) {
    let qubit = new QubitComponent('qubit', props);
    let qubits__item = createElement('li', ['calculator__qubits-item'])
    qubits__item.append(qubit.render());
    return qubits__item;
}

export function templateAdder() {
    let adder = createElement('div', ['adder']);

    let adder__name = createElement('div', ['adder__text']);
    adder__name.innerHTML = 'Add'

    let adder__image = createElement('img', ['adder__image']);
    adder__image.setAttribute('src', plus);

    adder.append(adder__image, adder__name);

    let qubits__item = createElement('li', ['calculator__qubits-item']);
    qubits__item.append(adder);

    return qubits__item;
}

export function templateForm(handler) {
    let form = new FormComponent('calculator__form', {
        title: 'Add new Qubit',
        fields: [
            {
                name: 'name',
                value: 'Qubit'
            },
            {
                name: 'direction',
                value: '0'
            }
        ]
    }, handler);

    let qubits__form = createElement('div', ['calculator__form'])
    qubits__form.append(form.render());
    return qubits__form;
}
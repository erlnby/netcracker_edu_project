import createElement from "../../utils/createElement";
import QubitComponent from "../qubit/qubit.component";
import plus from "../../assets/icons/plus.svg"
import FormComponent from "../form/form.component";
import HeaderComponent from "../header/header.component";
import ExecutorComponent from "../executor/executor.component";

export function template(ctx) {
    let calculator = createElement('div', ['calculator']);

    let calculator__header = createElement('div', ['calculator__header'])
    calculator__header.append(new HeaderComponent().render());
    calculator.append(calculator__header);

    let calculator__qubits = createElement('ul', ['calculator__qubits']);

    ctx.qubits.forEach((value) => {
        calculator__qubits.append(templateQubitsItem({value, remove: ctx.qubitRemove}));
    });

    let adder = templateAdder();
    calculator__qubits.append(adder);
    calculator.append(calculator__qubits);

    let executor = templateExecutor();
    let calculator__executor = createElement('div', ['calculator__executor']);
    calculator__executor.append(executor);
    calculator.append(calculator__executor);

    return {
        calculator,
        calculator__qubits
    };
}

export function templateQubitsItem({value, remove}) {
    let qubit = new QubitComponent(remove ,value);
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

export function templateForm(submit, discard) {
    let form = new FormComponent({
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
    }, submit, discard);

    let qubits__form = createElement('div', ['calculator__form'])
    qubits__form.append(form.render());
    return qubits__form;
}

function templateExecutor() {
    let executor = new ExecutorComponent();
    return executor.render();
}
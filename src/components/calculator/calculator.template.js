import createElement from "../../utils/createElement";
import QubitComponent from "../qubit/qubit.component";
import plus from "../../assets/icons/plus.svg"
import FormComponent from "../form/form.component";
import HeaderComponent from "../header/header.component";
import ExecutorComponent from "../executor/executor.component";
import FormValidator from "../../utils/FormValidator";

export function template(ctx) {
    let calculator = createElement('div', ['calculator']);

    let calculatorHeader = createElement('div', ['calculator__header'])
    calculatorHeader.append(new HeaderComponent().render());
    calculator.append(calculatorHeader);

    let calculatorQubits = createElement('ul', ['calculator__qubits']);

    ctx.qubits.forEach((value) => {
        let {remove, startMove, endMove, abortMove} = ctx
        calculatorQubits.append(templateQubitsItem({remove, startMove, endMove, abortMove, value}));
    });

    let adder = templateAdder();
    calculatorQubits.append(adder);
    calculator.append(calculatorQubits);

    let executor = templateExecutor();
    let calculatorExecutor = createElement('div', ['calculator__executor']);
    calculatorExecutor.append(executor);
    calculator.append(calculatorExecutor);

    return {
        calculator,
        calculatorQubits
    };
}

export function templateQubitsItem({value}) {
    let qubit = new QubitComponent('calculator__qubits-item', value);
    let qubitsItem = createElement('li', ['calculator__qubits-item'])
    qubitsItem.append(qubit.render());
    return qubitsItem;
}

export function templateAdder() {
    let adder = createElement('div', ['adder']);
    let adderName = createElement('div', ['adder__text'], 'Add');
    let adderImage = createElement('img', ['adder__image'], null, {src: plus});
    adder.append(adderImage, adderName);

    let qubitsItem = createElement('li', ['calculator__qubits-item']);
    qubitsItem.append(adder);

    return qubitsItem;
}

export function templateForm(submit, discard) {
    let form = new FormComponent({
        title: 'Add new Qubit',
        fields: [
            {
                name: 'name',
                value: 'Qubit',
                validator: FormValidator.text()
            },
            {
                name: 'direction',
                value: '0',
                validator: FormValidator.number(0, 360)
            }
        ]
    }, submit, discard);

    let qubitsForm = createElement('div', ['calculator__form'])
    qubitsForm.append(form.render());
    return qubitsForm;
}

function templateExecutor() {
    let executor = new ExecutorComponent();
    return executor.render();
}
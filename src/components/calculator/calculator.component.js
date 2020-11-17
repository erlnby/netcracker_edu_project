import Block from '../../modules/block';
import {template, templateForm, templateQubitsItem} from "./calculator.template";

export default class CalculatorComponent extends Block {
    static getQubits() {
        let qubits = window.localStorage.getItem('qubits')
        return JSON.parse(qubits) ?? [];
    }

    static setQubits(qubits) {
        localStorage.setItem('qubits', JSON.stringify(qubits));
    }

    static addQubit(qubit) {
        let qubits = this.getQubits();
        let id = 0;
        if (qubits.length > 0) {
            id = Math.max(...qubits.map((value) => value.id)) + 1;
        }

        qubits.push({
            id,
            ...qubit
        })

        this.setQubits(qubits);
    }

    render() {

        let qubits = CalculatorComponent.getQubits();

        let {calculator, calculator__qubits} = template({
            qubits,
        })

        calculator__qubits.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('.adder')) {
                let handler = (values) => {

                    let qubit = {
                        name: values.name,
                        angle: Number(values.direction)
                    }

                    CalculatorComponent.addQubit(qubit);

                    let qubitElement = templateQubitsItem(qubit);

                    calculator__qubits.lastChild.before(qubitElement);
                    let form = calculator.querySelector('.calculator__form');
                    form.remove();
                }

                let form = templateForm(handler)
                calculator.append(form);
            }
        });

        return calculator;
    }
}
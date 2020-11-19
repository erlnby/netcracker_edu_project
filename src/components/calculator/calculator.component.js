import Block from '../../modules/block';
import {template, templateForm, templateQubitsItem} from "./calculator.template";
import Qubits from "../../utils/qubits";
import createElement from "../../utils/createElement";

export default class CalculatorComponent extends Block {
    render() {

        let qubits = Qubits.getAll();

        let qubitRemove = (id) => {
            let qubit = this._element.querySelector(`.qubit[data-qubit-id="${id}"]`);
            let qubitsItem = qubit.parentElement;
            qubitsItem.remove();
            Qubits.remove(id);
        }

        let {calculator, calculator__qubits} = template({
            qubits,
            qubitRemove
        })

        calculator__qubits.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('.adder')) {
                let submit = (values) => {

                    let qubit = {
                        name: values.name,
                        angle: Number(values.direction)
                    }

                    Qubits.add(qubit);

                    let qubitElement = templateQubitsItem({value: qubit, remove: qubitRemove});

                    calculator__qubits.lastChild.before(qubitElement);
                    let form = calculator.querySelector('.calculator__form');
                    form.remove();
                }

                let discard = () => {
                    let form = calculator.querySelector('.calculator__form');
                    form.remove();
                }

                let form = templateForm(submit, discard);
                calculator.append(form);
            }
        });

        return calculator;
    }

    static addQubit(qubit) {
        let calculator__qubits = document.querySelector('.calculator__qubits');

        let remove = (id) => {
            let qubitsItem = qubit.parentElement;
            qubitsItem.remove();
            Qubits.remove(id);
        }
        qubit.remove = remove;

        let qubits__item = createElement('li', ['calculator__qubits-item']);
        qubits__item.append(qubit);


        calculator__qubits.lastChild.before(qubits__item);
    }
}
import Block from '../../modules/block';
import {template, templateForm, templateQubitsItem} from "./calculator.template";
import QubitService from "../../services/qubit.service";
import QubitComponent from "../qubit/qubit.component";
import createElement from "../../utils/createElement";

export default class CalculatorComponent extends Block {
    render() {

        let qubits = QubitService.getAll();

        let qubitAction = QubitComponent.HOLDERS['calculator__qubits-item'];

        let {calculator, calculatorQubits} = template({
            qubits,
            ...qubitAction
        })

        calculatorQubits.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('.adder')) {
                let submit = (values) => {

                    let qubit = {
                        name: values.name,
                        angle: Number(values.direction)
                    }

                    QubitService.add(qubit);

                    let qubitElement = templateQubitsItem({value: qubit});

                    calculatorQubits.lastChild.before(qubitElement);
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
}
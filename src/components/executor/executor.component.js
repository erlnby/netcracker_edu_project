import Block from '../../modules/block';
import {template, templateHolder} from "./executor.template";
import CalculatorComponent from "../calculator/calculator.component";
import qubits from "../../utils/qubits";

export default class ExecutorComponent extends Block {
    static OPERATIONS = [
        {name: 'Measure', place: 1},
        {name: 'CNOT', place: 2},
    ];

    constructor(props = {}) {
        props.operations = ExecutorComponent.OPERATIONS;
        super('executor', props);
    }

    render() {
        let {executor, executor__container, executor__select} = template(this.props);

        executor__select.addEventListener('change', event => {
            let qubits = executor__container.querySelectorAll('.qubit');
            qubits.forEach(qubit => CalculatorComponent.addQubit(qubit));

            let value = event.target.value;
            let place = ExecutorComponent.OPERATIONS.find(operation => operation.name === value).place;

            executor__container.innerHTML = '';
            for (let i = 0; i < place; i++) {
                executor__container.append(templateHolder());
            }
        });

        return executor;
    }
}
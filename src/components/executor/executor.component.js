import Block from '../../modules/block';
import {template, templateHolder} from "./executor.template";
import CalculatorComponent from "../calculator/calculator.component";
import qubits from "../../services/qubit.service";

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
        let {executor, executorContainer, executorSelect, executorButton} = template(this.props);

        executorSelect.addEventListener('change', event => {
            this.clearQubits(executorContainer)

            let value = event.target.value;
            let place = ExecutorComponent.OPERATIONS.find(operation => operation.name === value).place;
            this.place = place;
            this.size = 0;

            executorContainer.innerHTML = '';
            for (let i = 0; i < place; i++) {
                executorContainer.append(templateHolder());
            }

            executorButton.classList.remove('_hidden');
        });

        executorButton.addEventListener('click', () => {
            this.clearQubits(executorContainer);
        });

        executor.addEventListener('executor-add', () => {
            this.size++;
            this.sizeChange(executorButton);
        })

        executor.addEventListener('executor-remove', () => {
            this.size--;
            this.sizeChange(executorButton);
        })


        return executor;
    }

    clearQubits(container) {
        let qubits = container.querySelectorAll('.qubit');
        qubits.forEach(qubit => qubit.dispatchEvent(new Event('qubit-remove')));
    }

    sizeChange(button) {
       button.disabled = this.size !== this.place;
    }
}
export default class Qubits {
    static getAll() {
        let qubits = window.localStorage.getItem('qubits')
        return JSON.parse(qubits) ?? [];
    }

    static setAll(qubits) {
        localStorage.setItem('qubits', JSON.stringify(qubits));
    }

    static add(qubit) {
        let qubits = this.getAll();
        let id = 0;
        if (qubits.length > 0) {
            id = Math.max(...qubits.map((value) => value.id)) + 1;
        }

        qubits.push({
            id,
            ...qubit
        })

        this.setAll(qubits);
    }

    static remove(id) {
        let qubits = this.getAll();
        console.log(id);

        this.setAll(qubits.filter(qubit => qubit.id != id));
    }
}
export default class QubitService {
    static _qubits = null

    static getAll() {
        if (!this._qubits) {
            let qubits = window.localStorage.getItem('qubits')
            this._qubits = JSON.parse(qubits) ?? []
        }

        return this._qubits
    }

    static _sync(qubits) {
        this._qubits = qubits
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

        this._sync(qubits);
    }

    static remove(id) {
        let qubits = this.getAll();
        console.log(id);


        this._sync(qubits.filter(qubit => qubit.id != id));
    }
}
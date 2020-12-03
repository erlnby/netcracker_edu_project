onmessage = function(e) {
    let {action, qubits} = e.data;
    if (action === 'measure') {
        qubits.forEach(qubit => {
            qubit.angle = 0;
        })
    } else if (action === 'cnot') {
        qubits.forEach(qubit => {
            qubit.angle = Math.random() * 360;
        })
    }
    postMessage(qubits);
}
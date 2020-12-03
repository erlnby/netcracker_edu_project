onmessage = function(e) {
    let {action, qubits} = e.data;
    if (action === 'measure') {
        qubits[0].angle = Math.random() < 0.5 ? 0 : 180;
    } else if (action === 'cnot') {
        qubits[0].angle = Math.random() * 360;
        qubits[1].angle = (qubits[0].angle + 180) % 360;
    }
    postMessage(qubits);
}
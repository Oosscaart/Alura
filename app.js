//Variables.
newFunction();

function newFunction() {
    let numeroSecreto = 6;
    let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero el numero es: ${numeroSecreto}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreo es mayor')
        } 
    }
}


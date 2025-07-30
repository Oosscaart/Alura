// Variables
let nombre = 'Lua';
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

// Mensajes
let mensajeError = '¡Error!, Completa todos los campos'; 
let mensajeEdadMayor = 'Enhorabuena, puedes tener tu licencia';
let mensajeEdadMenor = 'No tienes edad pata tener licencia'
alert('¡Bienvenida y bienvenido a nuestro sitio web!');


accesoCampos();
function accesoCampos(){
    nombre = prompt ('¿Cual es tu nombre?');
    edad = prompt ('¿Cual es tu edad?');

    if (edad === '' | nombre === ''){
        alert(mensajeError);
    return accesoCampos();
    }
}

if(edad >= 18){
    alert(mensajeEdadMayor);
} else {
    alert(mensajeEdadMenor);
}
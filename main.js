

/*let nombreIngresado = prompt("Ingresa tu nombre:");
let nombreFormateado = nombreIngresado.charAt(0).toUpperCase() + nombreIngresado.slice(1).toLowerCase();

alert("¡Hola " + nombreFormateado + "!");
*/

alert("Bienvenido al BancoCoder");
// Ingreso de Dato del Cliente:
let nombre = prompt("Ingresa tu Nombre: ").toLowerCase()
let apellido = prompt("Ingresa tu apellido").toLowerCase()
let dni;
do{
    dni = prompt(`Hola ${nombre} ${apellido}, Ingresa tu Numero de Documento:`)
    if(/^\d+$/.test(dni)){
        break;
    }else{
        alert("El DNI debe contener solo números. Porfavor, intentalo nuevamente")}
}while(true);

// Saldo del cliente
saldo = 1000

// Retirar el dinero
function realizarRetiro() {
    do {
        let retiro = parseInt(prompt("Ingrese el monto a retirar:"));
        if (isNaN(retiro)) {
            alert("Por favor, ingrese un valor numérico.");
        } else if (retiro === 0 || retiro<1 ) {
            alert("El monto de retiro debe ser mayor que 0. Ingrese otro monto.");
        } else if (retiro > saldo) {
            alert("Su saldo es insuficiente para realizar esta transacción. Su saldo actual es: " + saldo + " USD. Ingrese otro monto.");
        } else {
            saldo -= retiro;
            alert("Retiro exitoso, su saldo actual es de: " + saldo + " USD");
            break;
        }
    } while (true);
}

realizarRetiro();
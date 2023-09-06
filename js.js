(alert)(saludo) (persona)
    console.log("Bienvenido a Comunica Acción" + persona);

let edad = prompt("Por favor ingresa tu edad");
let sosDeSn = confirm("¿Usted reside en San Nicolás?");

if (edad > 18) {
    alert("Sos mayor, acceso permitido");
} else {
    alert("Sos menor, estás entrando bajo tu responsabilidad");
}


if (sosDeSn == true) {
    alert("Podríamos coordinar una reunión presencial");
} else {
    alert("Podríamos coordinar una reunión via zoom");
}

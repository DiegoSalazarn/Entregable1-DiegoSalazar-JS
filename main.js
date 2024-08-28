const nombre = prompt("¡Hola! ¿Cómo te llamas?"); // saludar al usuario


if (nombre) {// continua si coloca su nombre

    alert(`¡Hola, ${nombre}!`);  // saludar al usuario por su nombre

  
    const edad = prompt(`¿Cuántos años tienes, ${nombre}?`);  // preguntar por la edad del usuario

    // ver que el usuario ingresó una edad
    if (edad) {
        
        const confirmacion = confirm(`¿Confirmas que tienes ${edad} años?`);// confirmar la edad que puso

        if (confirmacion) {
            alert("¡Gracias por confirmar tu edad!");
        } else {
            alert("Por favor, vuelve a ingresar tu edad.");
        }
    } else {
        alert("No pusiste tu edad.");
    }
} else {
    alert("No pusiste tu nombre."); //por si no pone su nombre, le tira el "no ingresaste tu nombre"
}
